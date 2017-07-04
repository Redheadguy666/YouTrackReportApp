"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ProjectInfo_1 = require("../Source/ProjectInfo");
const ReportTable_1 = require("../Source/ReportTable");
const ReportSummary_1 = require("../Source/ReportSummary");
class ReportContent extends React.Component {
    render() {
        return (React.createElement("div", null,
            React.createElement(ProjectInfo_1.ProjectInfo, null),
            React.createElement(ReportTable_1.ReportTable, null),
            React.createElement(ReportSummary_1.ReportSummary, null)));
    }
}
exports.ReportContent = ReportContent;
//# sourceMappingURL=ReportContent.js.map