// 页头

import React from 'react'
import {Link, Route, Switch} from "react-router-dom";
import {
    Container,
    Dropdown,
    Image,
    Menu, Sticky,
} from 'semantic-ui-react'
import Icon from "./Icon";
import {CartEntry} from "./Contexts";
import File from "./File";
import Logs from "./Logs";
import Directory from "./Directory";

class CartMenuItem extends React.Component {
    render() {
        return  <CartEntry className="item">
            <Icon name="shopping-cart"/>
        </CartEntry>
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
                           component={CartMenuItem}/>
                </Switch>
            </Container>
        </Menu>
    }
}

export default Header