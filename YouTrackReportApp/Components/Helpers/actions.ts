export const GET_PROJECTS = "GET_PROJECTS";
export const GET_REPORT = "GET_REPORT";

import ProjectModel from "../Models/ProjectModel";
import axios from "axios";

export function getProjectsAction()
{
    const request = axios.get("YouTrackData/GetProjects");

    return { type: GET_PROJECTS, payload: request }
}

export function getReportAction(projectModel: ProjectModel)
{
    return { type: GET_REPORT, project: projectModel }
}
