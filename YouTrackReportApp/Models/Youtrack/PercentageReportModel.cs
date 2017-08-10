using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YouTrackReports.Models.Youtrack
{
    public class PercentageReportModel
    {
        public int Id { get; set; }
        public string Developer { get; set; }
        public List<WorkingProjects> WorkingProjects { get; set; }
        public float WorkedOut { get; set; }
    }

    public class WorkingProjects
    {
        public string Name { get; set; }
        public int Days { get; set; }
    }
}