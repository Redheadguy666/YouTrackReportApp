export const GET_PROJECTS = "GET_PROJECTS";
export const GET_REPORT = "GET_REPORT";

import ProjectModel from "../Models/ProjectModel";

export function getProjectsAction()
{
    return { type: GET_PROJECTS }
}

export function getReportAction(projectModel: ProjectModel)
{
    return { type: GET_REPORT, project: projectModel }
}
