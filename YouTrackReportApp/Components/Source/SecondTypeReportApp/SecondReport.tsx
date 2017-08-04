import * as React from "react";
import { DatePanel } from "../SecondTypeReportApp/DatePanel"

export class SecondReport extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <DatePanel />
            </div>
        );
    }
}