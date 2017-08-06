import * as React from "react";

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
        this.props.secondReportCallback(event.target.value);
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