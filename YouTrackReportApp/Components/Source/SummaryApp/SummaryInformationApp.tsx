import * as React from "react";
import * as ReactDOM from "react-dom";

import { ReportNavbar } from "../SummaryApp/ReportNavbar";
import { ReportContent } from "../SummaryApp/ReportContent";

export class SummaryInformationApp extends React.Component<{}, {}>
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