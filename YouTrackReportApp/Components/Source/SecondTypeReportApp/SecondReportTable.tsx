import * as React from "react";
import { DatePanel } from "../SecondTypeReportApp/DatePanel"
import { SecondReportModel } from "../../Models/SecondReportModel";
import { DateModel } from "../../Models/DateModel";

interface ISecondReportProps
{
    secondReportData?: SecondReportModel[];
}

export class SecondReportTable extends React.Component<ISecondReportProps, {}>
{
    constructor(props: any) {
        super(props);
    }

    render() {

        let secondReportTable: JSX.Element[] = this.props.secondReportData ? this.props.secondReportData.map((dev) => 
            <tr>
                <td>{dev.developer}</td>
                <td>{dev.workedOut}</td>
            </tr>) : null;

        return (
            <div>
                <h4>Второй отчет:</h4>
                <table className= "table table-bordered">
                    <thead>
                        <tr>
                            <th>Разработчк</th>
                            <th>Отработано дней</th>
                        </tr>
                    </thead>
                    <tbody>
                        {secondReportTable}
                    </tbody>
                </table>
            </div>
        );
    }
}