import * as React from "react";

export class ProjectInfo extends React.Component<{}, {}>
{
    getReport(projectName: string, projectVersion) {
    }


    render() {
        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Параметр</th>
                            <th>Значение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Проект:</td>
                            <td>
                                <select className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Версия продукта:</td>
                            <td>
                                <select className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary">Получить отчет</button>
            </div>
        );
    }
}