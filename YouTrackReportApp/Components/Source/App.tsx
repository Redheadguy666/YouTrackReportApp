import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect } from "react-redux";
import bindActionCreators from "react-redux";

import { ReportNavbar } from "../Source/ReportNavbar";
import { ProjectInfo } from "../Source/ProjectInfo";
import { ReportContent } from "../Source/ReportContent";

import { getProjectsAction, getReportAction } from "../Helpers/actions";

interface IYouTrackReportsAppProps
{
    hello?: any;
}

export class YouTrackReportsApp extends React.Component<{}, {}>
{
    props: IYouTrackReportsAppProps = {} as any;

    render() {

        return (
            <div>
                <h1>{this.props.hello}</h1>
                <ReportNavbar />
                <ReportContent />
            </div>
        );
    }
}

function mapStateToProps(state)
{
    return {
        hello: state.name,
        age: state.age
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        actions: bindActionCreators({
            getProjectsAction,
            getReportAction
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(YouTrackReportsApp);