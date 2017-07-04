import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReportNavbar } from "../Source/ReportNavbar";
import { ProjectInfo } from "../Source/ProjectInfo";
import { ReportContent } from "../Source/ReportContent";

export class YouTrackReportsApp extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <ReportNavbar />
                <ReportContent />
            </div>
        );
    }
}
