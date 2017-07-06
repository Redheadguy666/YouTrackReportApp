export const GET_PROJECTS = "GET_PROJECTS";
export const GET_REPORT = "GET_REPORT";

import ProjectModel from "../Models/ProjectModel";
import axios from "axios";

export function getProjectsAction()
{
    const projectsRequest = axios.get("YouTrackData/GetProjects");

    return { type: GET_PROJECTS, payload: projectsRequest }
}

export function getReportAction(projectModel: ProjectModel)
{
    const reportRequest = axios.get("YouTrackData/GetReport");

    return { type: GET_REPORT, payload: reportRequest }
}
