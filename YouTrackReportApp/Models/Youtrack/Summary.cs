using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YouTrackReports.Models.Youtrack
{
    public class Summary
    {
        public SummaryModel SummaryModel { get; set; }
        public Summary()
        {
            this.SummaryModel = new SummaryModel();
        }
    }
}