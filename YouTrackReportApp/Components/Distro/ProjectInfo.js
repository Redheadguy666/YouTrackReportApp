"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class ProjectInfo extends React.Component {
    getReport(projectName, projectVersion) {
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("table", { className: "table table-bordered" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "\u041F\u0430\u0440\u0430\u043C\u0435\u0442\u0440"),
                        React.createElement("th", null, "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435"))),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u041F\u0440\u043E\u0435\u043A\u0442:"),
                        React.createElement("td", null,
                            React.createElement("select", { className: "form-control" },
                                React.createElement("option", null, "1"),
                                React.createElement("option", null, "2"),
                                React.createElement("option", null, "3")))),
                    React.createElement("tr", null,
                        React.createElement("td", null, "\u0412\u0435\u0440\u0441\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430:"),
                        React.createElement("td", null,
                            React.createElement("select", { className: "form-control" },
                                React.createElement("option", null, "1"),
                                React.createElement("option", null, "2"),
                                React.createElement("option", null, "3")))))),
            React.createElement("button", { className: "btn btn-primary" }, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0442\u0447\u0435\u0442")));
    }
}
exports.ProjectInfo = ProjectInfo;
//# sourceMappingURL=ProjectInfo.js.map