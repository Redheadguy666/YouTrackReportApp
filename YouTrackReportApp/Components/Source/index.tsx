import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { YouTrackReportsApp } from "../Source/App"
import todoApp from "../Helpers/reducers";
import { getProjectsAction, getReportAction } from "../Helpers/actions";

const store = createStore(todoApp);

let initialState = {
    user: "fsfs",
    age: 23
}

//Подписались на экшен
store.subscribe(() => {
    console.log("store changed!", store.getState());
});

store.dispatch(getProjectsAction());
store.dispatch(getReportAction());

ReactDOM.render
    (
    <Provider store={store}>
        <YouTrackReportsApp />
    </Provider>,
    document.getElementById("YouTrackReportsApp")
);