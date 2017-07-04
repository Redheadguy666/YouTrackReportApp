using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YouTrackReportsApp.Models;

namespace YouTrackReports.Models.Youtrack
{
    public class SummaryModel
    {
        public int SumPlanningMark { get; set; }
        public float SumActualMark { get; set; }
        public int DevelopersCount { get; set; }
        public float AverageParticipationDegree { get; set; }
        public void Initialize(IssueModel issue)
        {
            this.SumPlanningMark += issue.PlanningMark;
            this.SumActualMark += issue.ActualMark;

            if (this.DevelopersCount != 0)
            {
                this.AverageParticipationDegree = this.SumActualMark / this.DevelopersCount;
            }
        }
    }
}