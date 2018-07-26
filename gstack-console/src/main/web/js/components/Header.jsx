// 页头

import React from 'react'
import {Link, Route, Switch} from "react-router-dom";
import {
    Container,
    Dropdown,
    Image,
    Menu,
} from 'semantic-ui-react'
import Icon from "./Icon";
import Placeholder from "./Placeholder";
import LogsEntry from "./LogsEntry";
import CartEntry from "./CartEntry";

class SuiteMenuItems extends React.Component {
    render() {
        return <Placeholder>
            <CartEntry className="item">
                <Icon name="shopping-cart"/>
            </CartEntry>
            <LogsEntry className="item">
                <Icon name="clock"/>
            </LogsEntry>
        </Placeholder>
    }
}

class Header extends React.Component {
    render() {
        return <Menu fixed='top' inverted as="header">
            <Container>
                <Menu.Item as='a' header>
                    <Image size='mini' src='/img/logo.png' style={{marginRight: '1.5em'}}/>
                    Project Name
                </Menu.Item>
                <Link className="item" to="/">Home</Link>
                <Switch>
                    <Route path="/:suite"
                           component={SuiteMenuItems}/>
                </Switch>
            </Container>
        </Menu>
    }
}

export default Header