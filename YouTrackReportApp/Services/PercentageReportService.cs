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
        public List<PercentageReportModel> GetPercentageReport(DateModel date)
        {
            var date_ = new DateModel()
            {
                Year = 2017,
                Month = 06
            };

            var issues = this.YouTrackDataService.GetIssues(date_);
            var workItems = issues.SelectMany(l => l.WorkItems).ToList();

            var authorWorkItems = workItems
                .GroupBy(l => l.Author)
                .Select(l =>
                    new PercentageReportModel()
                    {
                        Developer = l.First().Author,
                        WorkedOut = l.Sum(m => m.Duration) / 480
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