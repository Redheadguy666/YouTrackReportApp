import * as React from "react";
import { DateModel } from "../../Models/DateModel";

interface IDatePanelProps
{
    secondReportCallback?: any;
}

interface IDataPanelState
{
    currentMonth: number;
    currentYear: number;
}

export class DatePanel extends React.Component<IDatePanelProps, IDataPanelState>
{
    private startYear = 2017;

    months: string[] =
    ["Январь", "Февраль", "Март", "Апрель",
        "Май", "Июнь", "Июль", "Август",
        "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

    years: number[] = [];

    state: IDataPanelState = {
        currentMonth: 0,
        currentYear: this.startYear
    };

    constructor(props: any) {
        super(props);
        let date = new Date();
        let currentYear = date.getFullYear();
        this.years.push(currentYear);
        let futureYears = currentYear - this.startYear;

        for (let i = 0; i < futureYears; i++) {
            currentYear++;
            this.years.push(currentYear);
        }
       
        this.passDateToSecondReport = this.passDateToSecondReport.bind(this);
    }

    passDateToSecondReport() {

        let date: DateModel = {
            month: Number(this.state.currentMonth),
            year: Number(this.state.currentYear)
        }

        this.props.secondReportCallback(date);
    }

    monthSelectChangedHandler(event) {
        this.setState({
            currentMonth: Number(event.target.selectedIndex) + 1
        });
    }

    yearSelectChangedHandler(event) {
        this.setState({
            currentYear: Number(event.target.value)
        });
    }

    render() {

        let monthCollection: JSX.Element[] = this.months.map((month) => (<option key={month}>{month}</option>));
        let yearsCollection: JSX.Element[] = this.years.map((year) => (<option key={year}>{year}</option>));

        return (
            <div id="datePanel" className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Параметр:</th>
                            <th>Значение:</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Месяц</td>
                            <td>
                                <select id="monthPicker" className="form-control" onChange={(e) => this.monthSelectChangedHandler(e)}>
                                    {monthCollection}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Год</td>
                            <td>
                                <select id="yearPicker" className="form-control" onChange={(e) => this.yearSelectChangedHandler(e)}>
                                    {yearsCollection}
                                </select>
                            </td>
                        </tr>

                    </tbody>
                </table>
                <button id="getSecondReport" className="btn btn-primary" onClick={this.passDateToSecondReport}>Получить отчет</button>
            </div>
        );
    }
}