import * as React from "react";
import { SummaryModel } from "../../Models/ReportModel"

interface IReportSummaryProps
{
    reportSummary?: SummaryModel
}

export class ReportSummary extends React.Component<IReportSummaryProps, {}>
{
    render() {

        let summary = this.props.reportSummary;

        return (
            <div>
                <dl className="inline text-center">
                    <dt>Общая плановая трудоемкость разработки(ч/д):</dt> <dd>{summary ? summary.sumPlanningMark : null}</dd>
                    <dt>Общая фактическая трудоемкость разработки(ч/д):</dt> <dd>{summary ? summary.sumActualMark : null}</dd>
                    <dt>Количество участников разработки:</dt> <dd>{summary ? summary.developersCount : null}</dd>
                    <dt>Средняя степень участия:</dt> <dd>{summary ? summary.averageParticipationDegree : null}</dd>
                </dl>
            </div>
        );
    }
}