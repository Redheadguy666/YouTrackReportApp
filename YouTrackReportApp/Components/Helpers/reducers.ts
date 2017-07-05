import { combineReducers } from "redux";
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from "../Helpers/actions";

const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action)
{
    switch (action.type)
    {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                visibilityFilter: action.filter
            });
        default:
            return state;
    }
}

function todos(state = [], action)
{
    switch (action.type)
    {
        case ADD_TODO:
            return [state, { text: action.text }]

        case TOGGLE_TODO:
            return [state, {text: action.index + " was accepted"}]

        default: return state;     
    }
}

export const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;