using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YouTrackReports.Models.Youtrack
{
    public class IndividualEmploymentModel
    {
        public int Id { get; set; }
        public string Developer { get; set; }
        public float ScopeOfWork { get; set; }
        public float ParticipationDegree { get; set; }
    }
}