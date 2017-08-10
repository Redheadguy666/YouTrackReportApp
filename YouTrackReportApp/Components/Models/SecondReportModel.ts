export class SecondReportModel
{
    developer: string;
    workingProjects: WorkingProject[]
    workedOut: number;
}

class WorkingProject
{
    name: string;
    days: number;
}