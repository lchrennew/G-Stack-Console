import React from 'react'
import {Link, withRouter} from "react-router-dom";

class LogsEntry extends React.Component {
    render() {
        let {suite, className} = this.props
        if (!suite)
            suite = this.props.match.params.suite
        return <Link to={`/${suite}/logs`} className={className}>
            {this.props.children}
        </Link>
    }
}

export default withRouter(LogsEntry)