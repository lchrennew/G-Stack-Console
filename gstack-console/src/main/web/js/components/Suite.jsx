import React from "react";
import Main from "./Main";
import VisibleDir from "./VisibleDir";
import IndexProvider from "./IndexProvider";
import {Breadcrumb, Divider, Grid} from "semantic-ui-react";
import {Link} from "react-router-dom";
import Icon from "./Icon";
import Placeholder from "./Placeholder";

class Suite extends React.Component {

    render() {
        let {match: {params: {suite}}} = this.props
        return <Placeholder>
            <Breadcrumb size="huge">
                <Icon name="box" size={24}/> <Link to={`/${suite}`} className="section"><b>{suite}</b></Link>
                <Breadcrumb.Divider>/</Breadcrumb.Divider>
            </Breadcrumb>
            <Divider hidden />
            <IndexProvider>
                <div className="commit-tease">
                    <div className="mr-auto">test</div>
                </div>
                <div className="file-wrap">
                    <VisibleDir dir="/"/>
                </div>
                <Divider hidden/>
            </IndexProvider>
        </Placeholder>

    }
}

export default Suite