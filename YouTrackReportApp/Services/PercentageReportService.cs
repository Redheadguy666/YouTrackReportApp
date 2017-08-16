﻿using Ninject;
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


            var issuesByProjects = issues.GroupBy(l => l.ProjectShortName).ToDictionary(l => l.Key, l => l.ToList());

            // TODO: Получать кол-во дней для каждого проекта в отдельности

            foreach (var projectItem in issuesByProjects)
            {
                // WorkItems всего проекта
                var workItems = projectItem.Value.SelectMany(l => l.WorkItems).ToList();

                // Тут содержатся рабочие дни для ВСЕХ разработчиков 
                //var workItemsByAuthor = workItems
                //    .GroupBy(l => l.Author)
                //    .Select(l => l.Sum(m => m.Duration) / MinutesInDay)
                //    .ToList();

                foreach (var item in reportModel.Developers)
                {

                }

                var workingProject = new WorkingProject();
                workingProject.Initialize(projectItem.Key, workItemsByAuthor);
                reportModel.WorkingProjects.Add(workingProject);

            }

            return reportModel;
        }
    }
}