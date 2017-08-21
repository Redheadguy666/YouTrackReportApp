import * as React from "react";
import { Link } from "react-router-dom"

export class ReportNavbar extends React.Component<{}, {}>
{
    constructor() {
        super();
    }

    componentDidMount() {
        $(".nav li").on("click", function () {
            $(".nav").find(".active").removeClass("active");
            $(this).addClass("active");
        });
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <ul className="nav navbar-nav">
                            <li className="active">
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