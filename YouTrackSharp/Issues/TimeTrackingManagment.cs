using System;
using System.Collections.Generic;
using EasyHttp.Http;
using EasyHttp.Infrastructure;
using YouTrackSharp.Infrastructure;

namespace YouTrackSharp.Issues
{
    public class TimeTrackingManagment
    {
        private readonly IConnection connection;

        public TimeTrackingManagment(IConnection connection)
        {
            this.connection = connection;
        }

        public List<WorkItem> GetWorkItemsForIssue(string issueIdenifier)
        {
            return this.connection.Get<List<WorkItem>>($"issue/{issueIdenifier}/timetracking/workitem");
        }
            
    }
}
