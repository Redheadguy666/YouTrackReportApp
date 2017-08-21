import * as React from "react";
import { DatePanel } from "../SecondTypeReportApp/DatePanel"
import { SecondReportTable } from "../SecondTypeReportApp/SecondReportTable";
import { SecondReportModel } from "../../Models/SecondReportModel";
import { DateModel } from "../../Models/DateModel"; 

interface ISecondReportState
{
    secondReport: SecondReportModel;
}

export class SecondReport extends React.Component<{}, ISecondReportState>
{
    getSecondReport(date: DateModel) {

        $("#firstReportSpinner").show();

        $.post("YouTrackData/GetPercentageReport", date, (data) => {
            this.setState({
                secondReport: data
            }, this.hideSpinner);
        }, "json")
    }

    hideSpinner() {
        $("#firstReportSpinner").hide();
    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <DatePanel secondReportCallback={(month) => this.getSecondReport(month)} />
                <SecondReportTable secondReportData={this.state ? this.state.secondReport : null}/>
            </div>
        );
    }
}