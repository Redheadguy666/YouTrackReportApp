import * as React from "react";
import { ProjectInfo } from "../Source/ProjectInfo";
import { ReportTable } from "../Source/ReportTable";
import { ReportSummary } from "../Source/ReportSummary";
import { ProjectModel } from "../Models/ProjectModel";
import { ReportModel } from "../Models/ReportModel";

interface IReportContentState
{
    projects?: ProjectModel[]
    report?: ReportModel;
}

export class ReportContent extends React.Component<{}, {}>
{
    state: IReportContentState = {} as any;

    constructor(props: any) {
        super(props);
    }

    componentWillMount() {
        this.getProjects();
    }

    getProjects() {
        $.get("YouTrackData/GetProjects", (response) => {
            this.setState({
                projects: response
            })
        }, "json");
    }

    getReports(recievedReport: ReportModel) {
        this.setState({
            report: recievedReport
        })
    }

    render() {

        let tableData = this.state.report ? this.state.report.tableDataInformation
            : null;

        let summaryData = this.state.report ? this.state.report.summaryInformation.summaryModel
            : null;
        
        return (
            <div>
                <ProjectInfo recievedProjects={this.state.projects} passReportToContentCallback={(report) => this.getReports(report)}/>
                <ReportTable employmentTable={tableData ? tableData.individualEmploymentModel : null}/>
                <ReportSummary reportSummary={summaryData}/>
            </div>
        );
    }
}