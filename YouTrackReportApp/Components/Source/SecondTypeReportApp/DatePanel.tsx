import * as React from "react";
import { DateModel } from "../../Models/DateModel";

interface IDatePanelProps
{
    secondReportCallback?: any;
}

interface IDataPanelState
{
    currentMonth: any;
    currentYear: any;
}

export class DatePanel extends React.Component<IDatePanelProps, IDataPanelState>
{
    constructor(props: any) {
        super(props);
        this.passDateToSecondReport = this.passDateToSecondReport.bind(this);
    }

    passDateToSecondReport() {

        let date: DateModel = {
            month: this.state.currentMonth,
            year: this.state.currentYear
        }

        this.props.secondReportCallback(date);
    }

    monthSelectChangedHandler(event) {
        this.setState({
            currentMonth: Number(event.target.selectedIndex) + 1
        });
    }

    yearSelectChangedHandler(event) {
        console.log(event.target);
        this.setState({
            currentYear: Number(event.target.value)
        });
    }

    render() {
        let months: string[] =
            ["Январь", "Февраль", "Март", "Апрель",
                "Май", "Июнь", "Июль", "Август",
                "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

        let date = new Date();
        let currentYear = date.getFullYear();
        let years: number[] = [currentYear];
        let futureYears = currentYear - 2017

        for (let i = 0; i < futureYears; i++) {
            currentYear++;
            years.push(currentYear);
        }

        let monthCollection: JSX.Element[] = months.map((month) => (<option key={month}>{month}</option>));
        let yearsCollection: JSX.Element[] = years.map((year) => (<option key={year}>{year}</option>));


        return (
            <div>
                <h3>Месяц:</h3>
                <select id="monthPicker" className="form-control" onChange={(e) => this.monthSelectChangedHandler(e)}>
                    {monthCollection}
                </select>
                <h3>Год:</h3>
                <select id="yearPicker" className="form-control" onClick={(e) => this.yearSelectChangedHandler(e)}>
                    {yearsCollection}
                </select>
                <button className="btn btn-primary" onClick={this.passDateToSecondReport}>Получить отчет</button>

            </div>
        );
    }
}