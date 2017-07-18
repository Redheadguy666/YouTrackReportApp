import * as React from "react";
import { IndividualEmploymentTable } from "../Models/ReportModel";

interface IReportTableProps
{
    employmentTable?: IndividualEmploymentTable
}

export class ReportTable extends React.Component<IReportTableProps, {}>
{
    props: IReportTableProps = {} as any;

    constructor(props: any) {
        super(props);
    }

    render() {

        let table: JSX.Element[] = this.props.employmentTable ? this.props.employmentTable.individualEmploymentInformation.map((employer) => 
            <div>
                <td key={employer.id}>{employer.id}</td>
                <td>{employer.developer}</td>
                <td>{employer.scopeOfWork}</td>
                <td>{employer.participationDegree}</td>;
            </div>) : null

        console.log(table);

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
                            <tr>
                                {table}
                            </tr>
                        </tbody>
                </table>
            </div>
        );
    }
}