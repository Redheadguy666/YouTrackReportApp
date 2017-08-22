using System.Linq;
using System.Web.Mvc;

using Ninject;
using Newtonsoft.Json.Serialization;

using YouTrackReportsApp.Models;
using YouTrackReports.Models.Youtrack;
using YouTrackReportsApp.Services;

using YouTrackSharp.Projects;
using Newtonsoft.Json;
using YouTrackReports.Models;
using YouTrackReports.Services;
using System.Collections.Generic;

namespace YouTrackReportsApp.Controllers
{
    public class YoutrackDataController : Controller
    {
        private JsonSerializerSettings jsonSerializerSettings;
        public JsonSerializerSettings JsonSerializerSettings
        {
            get
            {
                return this.jsonSerializerSettings ?? (this.jsonSerializerSettings = new JsonSerializerSettings
                {
                    ContractResolver = new CamelCasePropertyNamesContractResolver()
                });

            }
        }

        [Inject]
        public IReportService ReportService { get; set; }
        [Inject]
        public IPercentageReportService PercentageReportService { get; set; }

        [ActionName("GetReport")]
        public string GetReport(ProjectModel project)
        {
            var productionReport = this.ReportService.GetProductionReport(project);

            return this.JsonSerializeObject(productionReport);
        }

        [ActionName("GetProjects")]
        public string GetProjects()
        {
            var projects = this.ReportService.GetProjects();
            return this.JsonSerializeObject(projects);
        }

        [ActionName("GetPercentageReport")]
        public string GetPercentageReport(DateModel date)
        {
            var percentageReport = this.PercentageReportService.GetPercentageReport(date);
            return this.JsonSerializeObject(percentageReport);
        }

        [ActionName("GenerateExcel")]
        public void GenerateExcel(ReportModel report)
        {
            Response.ContentType = "text/csv";
            Response.AddHeader("Content-Disposition", "attachment;filename=Report.csv");
            Response.ContentEncoding = System.Text.Encoding.Default;

            var excelReport = this.ReportService.GenerateExcel(report);

            Response.BinaryWrite(excelReport);
        }

        private string JsonSerializeObject(object data)
        {
            return JsonConvert.SerializeObject(data, Formatting.None, this.JsonSerializerSettings);
        }
    }
}