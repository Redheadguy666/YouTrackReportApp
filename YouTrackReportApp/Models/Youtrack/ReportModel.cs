using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YouTrackReports.Models.Youtrack;

namespace YouTrackReports.Models
{
    public class ReportModel
    {
        public int ReportId { get; set; }
        public Summary SummaryInformation { get; set; }
        public IndividualEmploymentTable TableDataInformation { get; set; }
        public ReportModel()
        {
            this.SummaryInformation = new Summary();
            this.TableDataInformation = new IndividualEmploymentTable();
        }
        public void Initialize(SummaryModel summary, IndividualEmploymentTable tableInformation, int reportId = 0)
        {
            this.SummaryInformation.SummaryModel = summary;
        }
    }








}