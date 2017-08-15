using System;
using System.Collections.Generic;
using YouTrackReports.Models.Youtrack;
using YouTrackReportsApp.Models;

namespace YouTrackReports.Services
{
    public interface IPercentageReportService
    {
        PercentageReportModel GetPercentageReport(DateModel date);
    }
}
