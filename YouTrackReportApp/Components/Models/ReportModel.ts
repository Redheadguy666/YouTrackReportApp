export class ReportModel
{
    summaryInformation: Summary;
    tableDataInformation: IndividualEmploymentTable;
}

export class Summary
{
    summary: SummaryModel;
}

export class IndividualEmploymentTable
{
    individualEmploymentInformation: IndividualEmploymentModel[]
}

export class SummaryModel
{
    sumPlannigMark: number;
    sumActualMark: number;
    developersCount: number;
    averageParticipationDegree: number;
}

export class IndividualEmploymentModel
{
    id: number;
    developer: string;
    scopeOfWork: number;
    participationDegree: number;
}