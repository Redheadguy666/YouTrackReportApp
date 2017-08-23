using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;

using YouTrackSharp.Infrastructure;
using YouTrackSharp.Issues;

using YouTrackReportsApp.Models;
using YouTrackReports.Models.Youtrack;
using YouTrackSharp.Projects;

namespace YouTrackReportsApp.Services
{
    public class YouTrackDataService : IYouTrackDataService
    {
        public static Connection Connection { get; set; }
        public void Connect(string hostName ,string token)
        {
            Connection = new Connection(hostName, token);
        }

        public List<IssueModel> GetIssues(string projectName, string projectVersion)
        {
            var issuesManager = new IssueManagement(Connection);

            var issues = issuesManager.GetIssuesBySearch("Версия продукта: {" + projectVersion  + "}" ).ToList();

            var issuesModel = new List<IssueModel>();

            foreach (var issue in issues)
            {
                var issueModel = new IssueModel();
                issueModel.Initialize(issue, Connection);
                issuesModel.Add(issueModel);
            }

            return issuesModel;
        }

        public List<IssueModel> GetIssues(DateModel date)
        {

            var issuesManager = new IssueManagement(Connection);
            var projectManager = new ProjectManagement(Connection);

            var allProjects = projectManager.GetProjects();

            var year = date.Year.ToString();
            var month = date.Month < 10 ? "0" + date.Month.ToString() :
                date.Month.ToString();

            var issuesModel = new List<IssueModel>();

            foreach (var project in allProjects)
            {
                var query = "#{" + project.Name + "}";

                var issues = issuesManager.GetIssuesBySearch(query).ToList();

                foreach (var issue in issues)
                {
                    var issueModel = new IssueModel();
                    issueModel.Initialize(issue, Connection);
                    issuesModel.Add(issueModel);
                }

            }

            return issuesModel;
        }

    }
}