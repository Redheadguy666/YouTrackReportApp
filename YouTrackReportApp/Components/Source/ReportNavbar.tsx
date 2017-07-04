import * as React from "react";

export class ReportNavbar extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="active dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Отчеты <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Page 1</a></li>
                                        <li><a href="#">Page 2</a></li>
                                        <li><a href="#">Page 3</a></li>
                                    </ul>
                            </li>
                            <li>
                                <a href="#">Отчеты</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}