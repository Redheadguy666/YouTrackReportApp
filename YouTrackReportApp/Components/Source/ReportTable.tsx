import * as React from "react";
import { IndividualEmploymentModel } from "../Models/ReportModel";

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

    render() {

        let table: JSX.Element[] = this.props.employmentTable ? this.props.employmentTable.map((employer) => 
            <tr>
                <td key={employer.id}>{employer.id}</td>
                <td>{employer.developer}</td>
                <td>{employer.scopeOfWork}</td>
                <td>{employer.participationDegree}</td>
            </tr>) : null

        return (
            <div className="container">
                <h4>Индивидуальная занятость и степень участия:
                    <span><button className="btn btn-sm btn-primary">Экспорт в Excel</button></span>
                </h4>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Разработчик</th>
                            <th>Объем работ, чел/дней</th>
                            <th>Степень участия</th>
                        </tr>
                        </thead>
                        <tbody>
                            {table}
                        </tbody>
                </table>
            </div>
        );
    }
}