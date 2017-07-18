using Microsoft.CSharp.RuntimeBinder;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YouTrackSharp.Infrastructure;
using YouTrackSharp.Issues;

namespace YouTrackReportsApp.Models
{
    public class IssueModel
    {
        public int PlanningMark { get; set; }
        public int ActualMark { get; set; }
        public List<WorkItemModel> WorkItems { get; set; }
        public IssueModel()
        {
            this.WorkItems = new List<WorkItemModel>();
        }
        public void Initialize(dynamic issue, IConnection connection)
        {
            try
            {
                this.PlanningMark = issue.оценка.Length != 0 ? Convert.ToInt32(issue.оценка[0]) : 0;     //Плановая трудоемкость;
                this.ActualMark = issue.потрачено.Length != 0 ? Convert.ToInt32(issue.потрачено[0]) : 0; //Фактическая трудоемкость;
            }
            catch (RuntimeBinderException ex)
            {
                this.PlanningMark = 0;
                this.ActualMark = 0;
            }

            var timeTrackingManager = new TimeTrackingManagment(connection);
            string issueId = issue.id;

            var workingItems = timeTrackingManager.GetWorkItemsForIssue(issueId).
                Select(workingItem => (dynamic)workingItem.ToExpandoObject()).ToList();

            foreach (var workingItem in workingItems)
            {
                var workingItemModel = new WorkItemModel();
                workingItemModel.Inintialize(workingItem);
                this.WorkItems.Add(workingItemModel);
            }
        }
    }
}