using System;
using System.Collections.Generic;
using YouTrackReports.Models.Youtrack;
using YouTrackReportsApp.Models;

namespace YouTrackReports.Services
{
    public interface IPercentageReportService
    {
        List<PercentageReportModel> GetPercentageReport(DateModel date);
    }
}
