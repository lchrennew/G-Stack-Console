import React from "react";
import Main from "./Main";
import VisibleDir from "./VisibleDir";
import IndexProvider from "./IndexProvider";
import {Breadcrumb, Divider, Grid} from "semantic-ui-react";
import {Link, Route, Switch} from "react-router-dom";
import Icon from "./Icon";
import {CartContext} from "./Contexts";
import Placeholder from "./Placeholder";
import File from "./File";
import Logs from "./Logs";
import Directory from "./Directory";

class SuiteIndex extends React.Component{
    render() {
        let {match: {params: {suite}}} = this.props
        return <Placeholder>
            <Breadcrumb size="huge">
                <Icon name="box" size={24}/> <Link to={`/${suite}`} className="section"><b>{suite}</b></Link>
                <Breadcrumb.Divider>/</Breadcrumb.Divider>
            </Breadcrumb>
            <Divider hidden/>
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

class Suite extends React.Component {

    render() {
        let {match: {params: {suite}}} = this.props
        return <CartContext suite={suite}>
            <Switch>
                <Route path="/:suite/tree/:dir" component={Directory}/>
                <Route path="/:suite/clob/:dir" component={File}/>
                <Route path="/:suite/logs" component={Logs}/>
                <Route path="/:suite" component={SuiteIndex}/>
            </Switch>
        </CartContext>

    }
}



export default Suite