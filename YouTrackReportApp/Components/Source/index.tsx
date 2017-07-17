import * as React from "react";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";

import { YouTrackReportsApp } from "../Source/App";
import { ProjectModel } from "../Models/ProjectModel";

ReactDOM.render
(
    <YouTrackReportsApp />,
    document.getElementById("YouTrackReportsApp")
);