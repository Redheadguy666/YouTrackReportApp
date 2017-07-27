using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YouTrackReports.Models.Youtrack
{
    public class PercentageReportModel
    {
        public string Developer { get; set; }
        public float ProductHours { get; set; }
        public float ServicesHours { get; set; }
        public float YearHours { get; set; }
        public float Summary { get; set; }
        public float WorkedOut { get; set; }
    }
}