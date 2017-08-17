export class SecondReportModel
{
    developers: Developer[];
    workingProjects: WorkingProject[]
}

class WorkingProject
{
    name: string;
    workingDays: number[];
}

class Developer
{
    id: string;
    name: string;
    daysSummary: number;
}