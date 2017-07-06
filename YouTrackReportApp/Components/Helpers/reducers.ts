import { combineReducers } from "redux";
import { GET_PROJECTS, GET_REPORT } from "../Helpers/actions";

function getProjects(state = [], action)
{
    switch (action.type)
    {
        case GET_PROJECTS:
            return { ...state, projects: action.payload }
        default:
            return state;
    }
}

function getReport(state = [], action)
{
    switch (action.type)
    {
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