import * as React from "react";
import { DatePanel } from "../SecondTypeReportApp/DatePanel"
import { SecondReportModel } from "../../Models/SecondReportModel";

interface ISecondReportState
{
    secondReport: SecondReportModel;
}

export class SecondReport extends React.Component<{}, ISecondReportState>
{
    getSecondReport(month: string) {
        $.post("YouTrackData/GetPercentageReport", month, (data) => {
            this.setState({
                secondReport: data
            });
        }, "json")
    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <DatePanel secondReportCallback={(month) => this.getSecondReport(month)}/>
            </div>
        );
    }
}