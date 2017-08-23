import * as React from "react";

import { IndividualEmploymentModel } from "../../Models/ReportModel";
import { IndividualEmploymentTable } from "../../Models/ReportModel";
import { ReportModel } from "../../Models/ReportModel";

interface IReportTableProps
{
    employmentTable?: IndividualEmploymentModel[]
}

export class ReportTable extends React.Component<IReportTableProps, {}>
{
    props: IReportTableProps = {} as any;

    constructor(props: any) {
        super(props);
    }

    exportToExcel(tableData_: IndividualEmploymentModel[]) {
        //let csv = "data:text/csv"
        //let header = "№;Разработчик;Объем работ, чел/дней;Степень участия;" + "\n";
        
        //csv += header;

        //let rowString = "";

        //tableData.forEach(function (row, index) {
        //    let rowString = String(row.id) + ";" + row.developer + ";" +
        //        row.scopeOfWork + ";" + row.participationDegree;
        //    csv += index < tableData.length ? rowString + "\n" : rowString;
        //});

        //let encodedUri = encodeURI(csv);
        //let downloadLink = document.createElement("a");

        //let date = new Date();
        //let dd = date.getDate();
        //let mm = date.getMonth() + 1;
        //let yyyy = date.getFullYear();
        //let today = dd + "-" + mm + "-" + yyyy;
        //let fileName = "Отчет от " + today + ".csv";

        //downloadLink.setAttribute("href", encodedUri);
        //downloadLink.setAttribute("download", fileName)
        //document.body.appendChild(downloadLink);
        //downloadLink.click();

        let table: IndividualEmploymentTable = {
            individualEmploymentModel: tableData_
        }

        let tableData: ReportModel = {
            tableDataInformation: table
        }

        $.post("YouTrackData/GenerateExcel", tableData, () => (alert("fdsf")), "json");
    }

    render() {

        let table: JSX.Element[] = this.props.employmentTable ? this.props.employmentTable.map((employer) => 
            <tr>
                <td key={employer.id}>{employer.id}</td>
                <td>{employer.developer}</td>
                <td>{employer.scopeOfWork}</td>
                <td>{Math.round(employer.participationDegree * 1000) / 1000 * 100}%</td>
            </tr>) : null

        let buttonState = !this.props.employmentTable;

        return (
            <div id="employeeTable">
                <div className="container">
                    <h4>Индивидуальная занятость и степень участия:
                        <span><button disabled={buttonState} id="excelExportButton" onClick={() => this.exportToExcel(this.props.employmentTable)} className="btn btn-sm btn-primary">Экспорт в Excel</button></span>
                    </h4>
                    <table className="table table-bordered" id="employersTable">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Разработчик</th>
                                <th>Объем работ, часы</th>
                                <th>Степень участия</th>
                            </tr>
                            </thead>
                            <tbody>
                                {table}
                            </tbody>
                    </table>
                    <img id="firstReportSpinner" src="/Content/ajax-loader.gif" style={{ "display": "none" }} />
                </div>
            </div>
        );
    }
}