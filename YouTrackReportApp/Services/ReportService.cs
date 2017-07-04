using Ninject;
using System.Linq;
using System.Web.Mvc;
using YouTrackReports.Models;
using YouTrackReports.Models.Youtrack;
using YouTrackReportsApp.Models;
using YouTrackReportsApp.Services;
using YouTrackSharp.Projects;

namespace YouTrackReportsApp.Services
{
    public class ReportService : IReportService
    {
        [Inject]
        public IYouTrackDataService YouTrackDataService_ { get; set; }
        public ReportModel GetProductionReport(string projectName, string projectVersion)
        {
            var projectManager = new ProjectManagement(YouTrackDataService.Connection);
            var project = projectManager.GetProjects().ToList().First(p => p.ShortName == projectName);

            var versionBundleName = project.VersionBundleName();
            var versions = projectManager.GetVersions(versionBundleName).ToList().First(version => version.Name == projectVersion);

            var productionReport = new ReportModel();
            var issues = this.YouTrackDataService_.GetIssues(projectName, projectVersion);
            var workItems = issues.SelectMany(l => l.WorkItems).ToList();
            var authorWorkItems = workItems
                .GroupBy(l => l.Author)
                .Select(l =>
                    new IndividualEmploymentModel()
                    {
                        Developer = l.First().Author,
                        ScopeOfWork = l.Sum(m => m.Duration)
                    }
                )
                .OrderByDescending(l => l.ScopeOfWork)
                .ToList();

            var sumScopeOfWork = authorWorkItems.Sum(l => l.ScopeOfWork);
            var developersCount = authorWorkItems.Count;
            var averageParticipationDegree = sumScopeOfWork / developersCount;

            var sumPlannigMark = issues.Sum(l => l.PlanningMark);

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
    }
}