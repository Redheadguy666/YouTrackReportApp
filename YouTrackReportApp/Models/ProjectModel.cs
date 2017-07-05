using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using YouTrackSharp.Projects;

namespace YouTrackReports.Models
{
    public class ProjectModel
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public List<string> Versions { get; set; }
        public ProjectModel()
        {
            this.Versions = new List<string>();
        }
        public void Initialize(Project project, ProjectManagement projectManager)
        {
            this.Id = project.ShortName;
            this.Name = project.Name;

            var versionBundleName = project.VersionBundleName();
            var projectVersions = projectManager.GetVersions(versionBundleName).ToList();

            foreach (var version in projectVersions)
            {
                this.Versions.Add(version.Name);
            }
        }
    }
}