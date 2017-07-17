import * as React from "react";
import { ProjectInfo } from "../Source/ProjectInfo";
import { ReportTable } from "../Source/ReportTable";
import { ReportSummary } from "../Source/ReportSummary";
import { ProjectModel } from "../Models/ProjectModel";

interface IReportContentState
{
    projects: ProjectModel[]
}

export class ReportContent extends React.Component<{}, {}>
{

    getProjects() {
        $.get("YoutrackData/GetProjects", (projects) => {

        })
    }


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