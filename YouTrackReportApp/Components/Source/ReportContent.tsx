import * as React from "react";
import { ProjectInfo } from "../Source/ProjectInfo";
import { ReportTable } from "../Source/ReportTable";
import { ReportSummary } from "../Source/ReportSummary";
import { ProjectModel } from "../Models/ProjectModel";

interface IReportContentState
{
    projects?: ProjectModel[]
}

export class ReportContent extends React.Component<{}, {}>
{
    state: IReportContentState = {} as any;

    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        this.getReports();
    }

    getReports() {
        $.get("YouTrackData/GetProjects", (response) => {
            this.setState({
                projects: response
            })
        }, "json");
    }

    render() {
        return (
            <div>
                <ProjectInfo recievedProjects={this.state.projects}/>
                <ReportTable />
                <ReportSummary />
            </div>
        );
    }
}