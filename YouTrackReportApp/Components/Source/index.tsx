import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import { YouTrackReportsApp } from "../Source/App"
import todoApp from "../Helpers/reducers";
import { addTodo, toggleTodo } from "../Helpers/actions";


const store = createStore(todoApp);

let initialState = {
    user: "fsfs",
    age: 23
}

//Подписались на экшен
store.subscribe(() => {
    console.log("store changed!", store.getState());
});

store.dispatch(addTodo("Some data to display..."));
store.dispatch(toggleTodo(5));

ReactDOM.render
    (
    <Provider store={store}>
        <YouTrackReportsApp />
    </Provider>,
    document.getElementById("YouTrackReportsApp")
);