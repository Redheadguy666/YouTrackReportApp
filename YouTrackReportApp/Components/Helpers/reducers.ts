import { combineReducers } from "redux";
import { GET_PROJECTS, GET_REPORT } from "../Helpers/actions";

function getProjects(state, action)
{
    switch (action.type)
    {
        case GET_PROJECTS:
            //return Object.assign({}, state, {
            //    visibilityFilter: action.filter
            //});
        default:
            return state;
    }
}

function getReport(state, action)
{
    switch (action.type)
    {
        case GET_REPORT:
            //return [state, { text: action.text }]
        default:
            return state;     
    }
}

export const YouTrackReportsApp = combineReducers({
    getProjects,
    getReport
});

export default YouTrackReportsApp;