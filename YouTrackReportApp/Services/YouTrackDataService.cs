using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;

using YouTrackSharp.Infrastructure;
using YouTrackSharp.Issues;

using YouTrackReportsApp.Models;

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
            //var issues = issuesManager.GetAllIssuesForProject(projectName, projectVersion).
            //    Select(issue => (dynamic)issue.ToExpandoObject()).ToList();

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

    }
}