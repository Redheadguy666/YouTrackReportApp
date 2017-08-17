using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using YouTrackReports.Models;
using YouTrackReports.Models.Youtrack;
using YouTrackReportsApp.Models;
using YouTrackReportsApp.Services;

namespace YouTrackReports.Services
{
    public class PercentageReportService : IPercentageReportService
    {
        [Inject]
        public IYouTrackDataService YouTrackDataService { get; set; }

        const int MinutesInDay = 8 * 60;

        public PercentageReportModel GetPercentageReport(DateModel date)
        {
            var reportModel = new PercentageReportModel();

            var issues = this.YouTrackDataService.GetIssues(date);

            var developers = issues.SelectMany(l => l.WorkItems).Select(l => l.Author).Distinct().ToList();

            reportModel.Developers = developers.Select(l => new Developer()
            {
                Id = l,
                Name = l
            }).OrderBy(l => l.Name)
            .ToList();

            // Project -> IssueModel(ActualMark) -> WorkItems(Author)
            var issuesByProjects = issues.GroupBy(l => l.ProjectShortName).ToDictionary(l => l.Key, l => l.ToList());

            // TODO: Получать кол-во дней для каждого проекта в отдельности

            foreach (var projectItem in issuesByProjects)
            {
                // WorkItems всех IssueModel текущего проекта
                var workItems = projectItem.Value.SelectMany(l => l.WorkItems).ToList();

                // Тут содержатся рабочие дни для ВСЕХ разработчиков
                var workItemsByAuthor = workItems
                    .GroupBy(l => l.Author)
                    .ToDictionary(l => l.Key, l => l.Sum(m => m.Duration) / MinutesInDay);

                var workItemsByDevelopers = new List<float>();
                float workTime;
                foreach (var developer in reportModel.Developers)
                {
                    if (!workItemsByAuthor.TryGetValue(developer.Id, out workTime))
                    {
                        workTime = 0;         
                    }

                    workItemsByDevelopers.Add(workTime);
                }

                var workingProject = new WorkingProject();
                workingProject.Initialize(projectItem.Key, workItemsByDevelopers);
                reportModel.WorkingProjects.Add(workingProject);
            }

            return reportModel;
        }
    }
}