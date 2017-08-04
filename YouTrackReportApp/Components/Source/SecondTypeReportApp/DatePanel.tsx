import * as React from "react";

export class DatePanel extends React.Component<{}, {}>
{
    render() {

        let months: string[] =
            ["январь", "февраль", "март", "апрель",
                "май", "июнь", "июль", "август",
                "сентябрь", "октябрь", "ноябрь", "декабрь"];

        let monthCollection: JSX.Element[] = months.map((month) => (<option key={month}>month</option>))

        return (
            <div>
                <h3>Месяц:</h3>
                <select className="form-control">
                    {monthCollection}
                </select>
            </div>
        );
    }
}