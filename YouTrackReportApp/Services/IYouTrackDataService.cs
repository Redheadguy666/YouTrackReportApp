using System;
using System.Collections.Generic;
using YouTrackReportsApp.Models;
using YouTrackSharp.Issues;
using YouTrackSharp.Projects;

namespace YouTrackReportsApp.Services
{
    public interface IYouTrackDataService
    {
        void Connect(string hostName, string token);
        List<IssueModel> GetIssues(string projectName, string projectVersion);
    }
}
