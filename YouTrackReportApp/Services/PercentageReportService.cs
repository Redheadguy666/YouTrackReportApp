using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
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
        public List<PercentageReportModel> GetPercentageReport(DateModel date)
        {
            var issues = this.YouTrackDataService.GetIssues(date);
            
            var issuesByProjects = issues.GroupBy(l => l.ProjectShortName).ToDictionary(l => l.Key, l => l.ToList());

            // TODO: Получать кол-во дней для каждого проекта в отдельности

            foreach (var projectItem in issuesByProjects)
            {
                var workItems = projectItem.Value.SelectMany(l => l.WorkItems).ToList();

                workItems
                    .GroupBy(l => l.Author)
                    .Select(l => 
                        new PercentageReportModel()
                        {
                            WorkingProjects = new List<WorkingProject>()
                            {
                                new WorkingProject()
                                {
                                    Developers = 
                                }
                            }
                        }


            }



            //foreach (var projectItem in issuesByProjects)
            //{
            //    var workItems = projectItem.Value.SelectMany(l => l.WorkItems).ToList();

            //    // Массив issue's
            //    workItems
            //        .GroupBy(l => l.Author)
            //        .Select(l =>
            //            new PercentageReportModel()
            //            {
            //                Developer = l.First().Author,
            //                WorkedOut = l.Sum(m => m.Duration) / MinutesInDay,
            //                //WorkingProjects = l.
            //            }
            //    )
            //    .OrderBy(l => l.Developer)
            //    .ToList();
            //}










            var authorWorkItems = workItems
                .GroupBy(l => l.Author)
                .Select(l =>
                    new PercentageReportModel()
                    {
                        Developer = l.First().Author,
                        WorkedOut = l.Sum(m => m.Duration) / 480,
                        //WorkingProjects = l.
                    }
                )
                .OrderBy(l => l.Developer)
                .ToList();

            var position = 1;

            foreach (var authorWorkItem in authorWorkItems)
            {
                authorWorkItem.Id = position;
                position++;
            }

            return authorWorkItems;
        }
    }
}