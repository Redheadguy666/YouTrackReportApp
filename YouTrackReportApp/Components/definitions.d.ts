import { Action as ReduxAction } from "../node_modules/redux";

declare namespace YouTrackAppData
{
    export interface State
    {

    }   

    export interface Action extends ReduxAction
    {
        type: ActionType;
        payload: any;
    }

    export type ActionType = "GET_PROJECTS" | "GET_REPORT";
}