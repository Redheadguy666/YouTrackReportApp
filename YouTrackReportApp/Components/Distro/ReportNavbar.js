"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ReportNavbar extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement("nav", { className: "navbar navbar-inverse" },
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("ul", { className: "nav navbar-nav" },
                        React.createElement("li", { className: "active dropdown" },
                            React.createElement("a", { className: "dropdown-toggle", "data-toggle": "dropdown", href: "#" },
                                "\u041E\u0442\u0447\u0435\u0442\u044B ",
                                React.createElement("span", { className: "caret" })),
                            React.createElement("ul", { className: "dropdown-menu" },
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#" }, "Page 1")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#" }, "Page 2")),
                                React.createElement("li", null,
                                    React.createElement("a", { href: "#" }, "Page 3")))),
                        React.createElement("li", null,
                            React.createElement("a", { href: "#" }, "\u041E\u0442\u0447\u0435\u0442\u044B")))))));
    }
}
exports.ReportNavbar = ReportNavbar;
//# sourceMappingURL=ReportNavbar.js.map