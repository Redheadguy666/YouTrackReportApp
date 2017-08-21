using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace YouTrackReportsApp.Models
{
    public class WorkItemModel
    {
        public string Id { get; set; }
        public long Date { get; set; }
        public long Created { get; set; }
        public double Duration { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public void Inintialize(dynamic workingItem)
        {
            this.Id = workingItem.id;
            this.Date = workingItem.date;
            this.Created = workingItem.created;
            this.Duration = workingItem.duration;
            this.Description = workingItem.description;
            this.Author = workingItem.author.login;
        }
    }
}