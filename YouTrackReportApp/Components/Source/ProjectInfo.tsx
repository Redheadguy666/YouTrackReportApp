﻿import * as React from "react";
import { ProjectModel } from "../Models/ProjectModel";

interface IProjectInfoProps
{
    recievedProjects: ProjectModel[];
}

interface IProjectInfoState
{
    currentProject: string;
    projectVersions: string[];
}

export class ProjectInfo extends React.Component<IProjectInfoProps, {}>
{
    state: IProjectInfoState = {} as any;

    constructor(props: any) {
        super(props);
        this.handleSelectChanged = this.handleSelectChanged.bind(this);
        this.getVersions = this.getVersions.bind(this);
        this.getReportForProject = this.getReportForProject.bind(this);

    }

    getVersions(projectName: string) {
        this.setState({
            projectVersions: this.props.recievedProjects
                .find((project) => project.name == projectName).versions,
            currentProject: projectName
        });
    }

    handleSelectChanged(event: any) {
        this.getVersions(event.target.value);
    }

    getReportForProject(event: any) {

        let project = {
            name: this.state.currentProject,
            version: this.state.projectVersions[0]
        }

        let currentProject = JSON.stringify(project);

        $.post("YouTrackData/GetReport", currentProject, (response) => {
            alert(JSON.stringify(response));
        }, "json");
    }

    render() {

        let projects: JSX.Element[] = this.props.recievedProjects ? this.props.recievedProjects.map((project) => 
            <option key={project.id}>{project.name}</option>) : null;

        let projectVersions: JSX.Element[] = this.state.projectVersions ? this.state.projectVersions.map((version) =>
            <option key={version}>{version}</option>) : null;

        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Параметр</th>
                            <th>Значение</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Проект:</td>
                            <td>
                                <select className="form-control" onChange={this.handleSelectChanged}>
                                    {projects}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Версия продукта:</td>
                            <td>
                                <select className="form-control">
                                    {projectVersions}
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary" onClick={this.getReportForProject}>Получить отчет</button>
            </div>
        );
    }
}