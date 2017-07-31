using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YouTrackReports.Models.Youtrack
{
    public class PercentageReportModel
    {
        public string Developer { get; set; }
        public float ProductDays { get; set; }
        public float ServicesDays { get; set; }
        public float YearDays { get; set; }
        public float Summary { get; set; }
        public float WorkedOut { get; set; }
    }
}