// 页头

import React from 'react'
import {Link} from "react-router-dom";
import {
    Container,
    Dropdown,
    Image,
    Menu, Sticky,
} from 'semantic-ui-react'
import Icon from "./Icon";
import {CartEntry} from "./Contexts";


class Header extends React.Component {
    render() {
        return <Menu fixed='top' inverted as="header">
            <Container>
                <Menu.Item as='a' header>
                    <Image size='mini' src='/img/logo.png' style={{marginRight: '1.5em'}}/>
                    Project Name
                </Menu.Item>
                <Link className="item" to="/">Home</Link>
                <CartEntry className="item">
                    <Icon name="shopping-cart"/>
                </CartEntry>
            </Container>
        </Menu>
    }
}

export default Header