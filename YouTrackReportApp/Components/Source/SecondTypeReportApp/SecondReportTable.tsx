import * as React from "react";
import { DatePanel } from "../SecondTypeReportApp/DatePanel"
import { SecondReportModel } from "../../Models/SecondReportModel";
import { DateModel } from "../../Models/DateModel";

interface ISecondReportProps
{
    secondReportData?: SecondReportModel;
}

export class SecondReportTable extends React.Component<ISecondReportProps, {}>
{
    constructor(props: any) {
        super(props);
    }

    mapProjectToWorkingDays(index) : JSX.Element[] {
       return this.props.secondReportData.workingProjects.map((project) =>
            <td>{project.workingDays[index]}</td>)
    }

    render() {

        let developers = this.props.secondReportData ? this.props.secondReportData.developers.map((developer, index) => {

            let projectDays = this.props.secondReportData.workingProjects.map((project) =>
                <td>{project.workingDays[index]}</td>);

            return (
                <tr>
                    <td>{developer.name}</td>
                    {projectDays}
                    <td>{developer.daysSummary}</td>
                </tr>)
            }) : null; 
           

        let workingProjects: JSX.Element[] = this.props.secondReportData ? this.props.secondReportData.workingProjects.map((project) =>
            <th>{project.name}</th>) : null;

        return (
            <div>
                <h4>Процентовки:</h4>
                <table className= "table table-bordered">
                    <thead>
                        <tr>
                            <th>Разработчик</th>
                            {workingProjects}
                            <th>Итого</th>
                        </tr>
                    </thead>
                    <tbody>
                        {developers}
                    </tbody>
                </table>
                <img id="firstReportSpinner" src="/Content/ajax-loader.gif" style={{ "display": "none" }} />
            </div>
        );
    }
}