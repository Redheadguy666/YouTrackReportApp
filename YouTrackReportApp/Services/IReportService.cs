using System;
using System.Collections.Generic;
using YouTrackReports.Models;
using YouTrackReports.Models.Youtrack;

namespace YouTrackReportsApp.Services
{
    public interface IReportService
    {
        ReportModel GetProductionReport(ProjectModel project);
        List<ProjectModel> GetProjects();
        byte[] GenerateExcel(ReportModel report);
    }
}
