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

        public PercentageReportModel()
        {
            this.WorkingProjects = new List<WorkingProject>();
        }
    }

    public class WorkingProject
    {   
        public string Name { get; set; }
        public List<double> WorkingDays { get; set; }
        public WorkingProject()
        {
            this.WorkingDays = new List<double>();
        }

        public void Initialize(string projectName, List<double> workingDays)
        {
            this.Name = projectName;
            this.WorkingDays = workingDays;     
        }

    }
}