import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"; 

import { ReportNavbar } from "./ReportNavbar";
import { FirstReport } from "../FirstTypeReportApp/FirstReport"
import { ProjectModel } from "../../Models/ProjectModel";
import { SecondReport } from "../SecondTypeReportApp/SecondReport"

export class YouTrackReportsApp extends React.Component<{}, {}>
{
    render() {
        return (
            <Router>
                <div>
                    <ReportNavbar/>
                    <Switch>
                        <Route exact path="/" component={FirstReport} />
                        <Route path="/second-report" component={SecondReport} />
                    </Switch>
                </div>
            </Router>
        );
    }
}