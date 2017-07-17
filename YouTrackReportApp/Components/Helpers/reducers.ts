import { combineReducers } from "redux";
import { GET_PROJECTS, GET_REPORT } from "../Helpers/actions";
import { ProjectModel } from "../Models/ProjectModel";
import { ReportModel } from "../Models/ReportModel";

const INITIAL_STATE = 
[{
    projects:
    [{
        id: "",
        name: "",
        versions: []
    }],
    report:
    {
        summury:
        {
            summaryModel:
            {
                averageParticipationDegree: 0,
                developersCount: 0,
                sumActualMark: 0,
                sumPlanningMark: 0
            },
            tableDataInformation: 
            {
                individualEmploymentModel:
                [
                    { developer: "", id: 0, participationDegree: 0, scopeOfWork: 0 }
                ]
            }
        }
    }
}];


function getProjects(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return { ...state, projects: action.payload }
        default:
            return state;
    }
}

function getReport(state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_REPORT:
            return { ...state, report: action.payload }
        default:
            return state;
    }
}

export const YouTrackReports = combineReducers({
    getProjects,
    getReport
});

export default YouTrackReports;