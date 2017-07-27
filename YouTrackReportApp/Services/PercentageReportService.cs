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







            return null;
        }
    }
}