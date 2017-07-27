using Ninject;
using System;
using System.Collections.Generic;
using YouTrackReports.Models.Youtrack;
using YouTrackReportsApp.Services;

namespace YouTrackReports.Services
{
    public class PercentageReportService : IPercentageReportService
    {
        [Inject]
        public IYouTrackDataService YouTrackDataService { get; set; }
        public PercentageReportModel[] GetPercentageReport(DateModel date)
        {
            var date_ = new DateModel()
            {
                Year = 2017,
                Month = 06
            };
            var issues = this.YouTrackDataService.GetIssues(date_);






            return null;
        }
    }
}