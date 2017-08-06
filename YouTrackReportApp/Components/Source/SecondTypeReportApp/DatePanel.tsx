import * as React from "react";
import { DateModel } from "../../Models/DateModel";

interface IDatePanelProps
{
    secondReportCallback?: any;
}

export class DatePanel extends React.Component<IDatePanelProps, {}>
{
    constructor(props: any) {
        super(props);
        this.passMonthToSecondReport = this.passMonthToSecondReport.bind(this);
    }

    passMonthToSecondReport(event) {

        let date: DateModel = {
            month: Number(event.target.selectedIndex) + 1,
            year: 2017
        }

        this.props.secondReportCallback(date);
    }

    render() {
        let months: string[] =
            ["январь", "февраль", "март", "апрель",
                "май", "июнь", "июль", "август",
                "сентябрь", "октябрь", "ноябрь", "декабрь"];

        let monthCollection: JSX.Element[] = months.map((month) => (<option key={month}>{month}</option>))

        return (
            <div>
                <h3>Месяц:</h3>
                <select className="form-control" onChange={(e) => this.passMonthToSecondReport(e)}>
                    {monthCollection}
                </select>
            </div>
        );
    }
}