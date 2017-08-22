export class ReportModel
{
    summaryInformation?: Summary;
    tableDataInformation?: IndividualEmploymentTable;
}

export class Summary
{
    summaryModel: SummaryModel;
}

export class IndividualEmploymentTable
{
    individualEmploymentModel: IndividualEmploymentModel[]
}

export class SummaryModel
{
    sumPlanningMark: number;
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