import * as React from "react";
import { ProjectInfo } from "../Source/ProjectInfo";
import { ReportTable } from "../Source/ReportTable";
import { ReportSummary } from "../Source/ReportSummary";

export class ReportContent extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <ProjectInfo />
                <ReportTable />
                <ReportSummary />
            </div>
        );
    }
}