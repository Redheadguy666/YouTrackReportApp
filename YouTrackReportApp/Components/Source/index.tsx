import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { YouTrackReportsApp } from "../Source/App";
import YouTrackReports from "../Helpers/reducers";
import { getProjectsAction, getReportAction } from "../Helpers/actions";
import { ProjectModel } from "../Models/ProjectModel";

const store = createStore(YouTrackReports);

//Подписались на экшен
store.subscribe(() => {
    console.log("store changed!", store.getState());
});

let projectModel: ProjectModel = {
    projectName: "WebC",
    projectVersion: "Web-client 5.4.9"
}

store.dispatch(getProjectsAction());
store.dispatch(getReportAction(projectModel));

ReactDOM.render
    (
    <Provider store={store}>
        <YouTrackReportsApp />
    </Provider>,
    document.getElementById("YouTrackReportsApp")
);