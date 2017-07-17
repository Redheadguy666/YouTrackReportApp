import * as React from "react";
import * as ReactDOM from "react-dom";

import { ReportNavbar } from "../Source/ReportNavbar";
import { ProjectInfo } from "../Source/ProjectInfo";
import { ReportContent } from "../Source/ReportContent";

interface IYouTrackReportsAppProps
{
    hello?: any;
}

export class YouTrackReportsApp extends React.Component<IYouTrackReportsAppProps, {}>
{
    render() {
        console.log(this.props.hello);
        return (
            <div>
                <ReportNavbar />
                <ReportContent />
            </div>
        );
    }
}