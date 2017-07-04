import * as React from "react";

export class ReportSummary extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <dl className="inline text-center">
                    <dt>Общая плановая трудоемкость разработки(ч/д):</dt> <dd>949</dd>
                    <dt>Общая фактическая трудоемкость разработки(ч/д):</dt> <dd>948,75</dd>
                    <dt>Количество участников разработки:</dt> <dd>17</dd>
                    <dt>Средняя степень участия:</dt> <dd>55,9</dd>
                </dl>
            </div>
        );
    }
}