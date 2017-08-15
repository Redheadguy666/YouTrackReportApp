using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YouTrackReports.Models.Youtrack
{
    public class PercentageReportModel
    {
        public List<Developer> Developers { get; set; }
        public List<WorkingProject> WorkingProjects { get; set; }
    }

    public class WorkingProject
    {
        public string Name { get; set; }
        public List<float> WorkingDays { get; set; }
    }
}