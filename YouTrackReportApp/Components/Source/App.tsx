import * as React from "react";
import * as ReactDOM from "react-dom";

import { ReportNavbar } from "../Source/ReportNavbar";
import { ProjectInfo } from "../Source/ProjectInfo";
import { ReportContent } from "../Source/ReportContent";

interface IYouTrackReportsAppProps
{
    
}

export class YouTrackReportsApp extends React.Component<{}, {}>
{
    props: IYouTrackReportsAppProps = {} as any;

    render() {

        return (
            <div>
                <ReportNavbar />
                <ReportContent />
            </div>
        );
    }
}