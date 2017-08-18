import * as React from "react";
import { Link } from "react-router-dom"

export class ReportNavbar extends React.Component<{}, {}>
{
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="active dropdown">
                                <Link to="/">Отчет о производстве</Link>
                            </li>
                            <li>
                                <Link to="/second-report">Процентовки</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}