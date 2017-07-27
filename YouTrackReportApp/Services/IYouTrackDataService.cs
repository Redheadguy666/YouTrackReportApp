using System;
using System.Collections.Generic;
using YouTrackReports.Models.Youtrack;
using YouTrackReportsApp.Models;
using YouTrackSharp.Issues;
using YouTrackSharp.Projects;

namespace YouTrackReportsApp.Services
{
    public interface IYouTrackDataService
    {
        void Connect(string hostName, string token);
        List<IssueModel> GetIssues(string projectName, string projectVersion);
        List<IssueModel> GetIssues(DateModel date);
    }
}
