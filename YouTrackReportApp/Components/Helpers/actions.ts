export const GET_PROJECTS = "GET_PROJECTS";
export const GET_REPORT = "GET_REPORT";

import { ProjectModel } from "../Models/ProjectModel";
import axios from "axios";


export function getProjectsAction() {

    let projectAction;

    const projectsRequest = axios.get("YouTrackData/GetProjects").then((response) => {
        projectAction = response.data;
    });

    return { type: GET_PROJECTS, payload: projectsRequest }
}

export function getReportAction(projectModel: ProjectModel) {
    const reportRequest = axios.get("YouTrackData/GetReport").then((response) => {
        console.log(response.data);
    });

    return { type: GET_REPORT, payload: reportRequest }
}
