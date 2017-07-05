using System.Linq;
using System.Web.Mvc;

using Ninject;
using Newtonsoft.Json.Serialization;

using YouTrackReportsApp.Models;
using YouTrackReports.Models.Youtrack;
using YouTrackReportsApp.Services;

using YouTrackSharp.Projects;
using Newtonsoft.Json;

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

        [ActionName("GetReport")]
        public string GetReport(string projectName, string projectVersion)
        {
            var productionReport = this.ReportService.GetProductionReport(projectName, projectVersion);

            return this.JsonSerializeObject(productionReport);
        }

        [ActionName("GetProjects")]
        public string GetProjects()
        {
            var projects = this.ReportService.GetProjects();
            return this.JsonSerializeObject(projects);
        }

        private string JsonSerializeObject(object data)
        {
            return JsonConvert.SerializeObject(data, Formatting.None, this.JsonSerializerSettings);
        }
    }
}