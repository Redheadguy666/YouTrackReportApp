import * as React from "react";

export class ReportTable extends React.Component<{}, {}>
{
    render() {
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                </table>
            </div>
        );
    }
}