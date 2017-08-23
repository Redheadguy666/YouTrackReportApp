using CsvHelper;
using CsvHelper.Configuration;
using Ninject;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web.Mvc;
using YouTrackReports.Models;
using YouTrackReports.Models.Youtrack;
using YouTrackReports.Services;
using YouTrackReportsApp.Models;
using YouTrackReportsApp.Services;
using YouTrackSharp.Projects;

namespace YouTrackReportsApp.Services
{
    public class ReportService : IReportService
    {
        [Inject]
        public IYouTrackDataService YouTrackDataService_ { get; set; }
        public ReportModel GetProductionReport(ProjectModel project)
        {

            var projectManager = new ProjectManagement(YouTrackDataService.Connection);
            var project_ = projectManager.GetProjects().ToList().First(p => p.Name == project.Name);

            var versionBundleName = project_.VersionBundleName();
            var versions = projectManager.GetVersions(versionBundleName).ToList().First(version => version.Name == project.Versions[0]);

            var productionReport = new ReportModel();
            var issues = this.YouTrackDataService_.GetIssues(project_.ShortName, project.Versions[0]);
            var workItems = issues.SelectMany(l => l.WorkItems).ToList();
            var authorWorkItems = workItems
                .GroupBy(l => l.Author)
                .Select(l =>
                    new IndividualEmploymentModel()
                    {
                        Developer = l.First().Author,
                        ScopeOfWork = l.Sum(m => Math.Round(m.Duration / 60, 1))
                    }
                )
                .OrderByDescending(l => l.ScopeOfWork)
                .ToList();

            var sumScopeOfWork = authorWorkItems.Sum(l => l.ScopeOfWork);
            var developersCount = authorWorkItems.Count;
            var averageParticipationDegree = sumScopeOfWork / developersCount;

            var sumPlannigMark = issues.Sum(l => l.PlanningMark / 60);

            var position = 1;

            foreach (var authorWorkItem in authorWorkItems)
            {
                authorWorkItem.Id = position++;
                authorWorkItem.ParticipationDegree = authorWorkItem.ScopeOfWork / sumScopeOfWork;
            }

            productionReport.TableDataInformation.IndividualEmploymentModel = authorWorkItems;
            productionReport.SummaryInformation.SummaryModel.DevelopersCount = developersCount;
            productionReport.SummaryInformation.SummaryModel.AverageParticipationDegree = averageParticipationDegree;
            productionReport.SummaryInformation.SummaryModel.SumActualMark = sumScopeOfWork;
            productionReport.SummaryInformation.SummaryModel.SumPlanningMark = sumPlannigMark;

            return productionReport;
        }
        public List<ProjectModel> GetProjects()
        {
            var projectManager = new ProjectManagement(YouTrackDataService.Connection);

            var allProjects = projectManager.GetProjects().ToList();

            var projectModels = new List<ProjectModel>();

            foreach (var project in allProjects)
            {
                var projectModel = new ProjectModel();
                projectModel.Initialize(project, projectManager);
                projectModels.Add(projectModel);
            }

            return projectModels;
        }
        public byte[] GenerateExcel(ReportModel report)
        {
            var currentEncoding = System.Text.Encoding.Default;

            var memoryStream = new MemoryStream();

            using (var sw = new StreamWriter(memoryStream, currentEncoding))
            {
                var settings = new CsvConfiguration()
                {
                    Delimiter = ";",
                    Encoding = System.Text.Encoding.Default
                };

                settings.RegisterClassMap(new CsvPropertiesMapper());

                var csvWriter = new CsvWriter(sw, settings);
                csvWriter.WriteHeader(typeof(IndividualEmploymentModel));

                foreach (var developer in report.TableDataInformation.IndividualEmploymentModel)
                {
                    csvWriter.WriteRecord(developer);
                }
            }

            var array = memoryStream.ToArray();
            memoryStream.Close();

            return array;
        }
    }
}