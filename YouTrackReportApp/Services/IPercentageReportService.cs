using System;
using System.Collections.Generic;
using YouTrackReports.Models.Youtrack;

namespace YouTrackReports.Services
{
    public interface IPercentageReportService
    {
        PercentageReportModel[] GetPercentageReport(DateModel date);
    }
}
