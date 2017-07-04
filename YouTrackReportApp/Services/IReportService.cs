using System;
using System.Collections.Generic;
using YouTrackReports.Models;

namespace YouTrackReportsApp.Services
{
    public interface IReportService
    {
        ReportModel GetProductionReport(string projectName, string projectVersion);
    }
}
