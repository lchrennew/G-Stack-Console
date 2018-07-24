/*****
 * 后缀命名规范
 * Context -> 容器，封装了带有ref的容器Component
 * Component -> 渲染props.children的容器
 * Manager -> 管理器， 封装了带有ref非容器Component
 */

import React from 'react'
import NotificationSystem from "react-notification-system";
import {
    Modal,
    Segment,
    Sidebar,
    Menu,
    Item,
    Container,
    Header,
    Divider,
    Table,
    Label,
    Button,
    Sticky, Dropdown
} from 'semantic-ui-react'
import Icon from "./Icon";
import Main from "./Main";

const notifyRef = React.createRef()

// 向全局组件中添加此组件
export class NotificationManager extends React.Component {
    render() {
        return <NotificationSystem ref={notifyRef}/>
    }
}

// 其他js可以调用notify(notification)
export const notify = opt => notifyRef.current && notifyRef.current.addNotification(opt)

const shellRef = React.createRef()

export const openShell = () => shellRef.current && shellRef.current.start()
export const closeShell = () => shellRef.current && shellRef.current.close()
export const printShell = (line) => shellRef.current && shellRef.current.print(line)

class ShellOutput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {open: false, lines: []}
        this.messagesEnd = React.createRef()

    }

    start() {
        this.setState({open: true, lines: []})
    }

    close() {
        this.setState({open: false, lines: []})
    }

    print(line) {
        this.setState({open: true, lines: [...this.state.lines, line]})
    }

    componentDidUpdate() {
        if (this.state.open)
            this.messagesEnd.current.scrollIntoView({behavior: "smooth"})
    }

    render() {
        return <Modal open={this.state.open}
                      size="fullscreen"
                      closeOnEscape={true}
                      closeOnDimmerClick={true}
                      onClose={this.close.bind(this)}>
            <Modal.Header>执行输出</Modal.Header>
            <Modal.Content scrolling className="shell">
                {this.state.lines.map((line, i) => <p key={i}>{line}</p>)}
                <div
                    ref={this.messagesEnd}>
                </div>
            </Modal.Content>
        </Modal>
    }

}
//    "Content-Type": "text/plain; charset\u003dutf-8"
export class ShellManager extends React.Component {
    render() {
        return <ShellOutput ref={shellRef}/>
    }
}

const cartRef = React.createRef()

export const openCart = () => cartRef.current && cartRef.current.open()
export const toggleCart = () => cartRef.current && cartRef.current.toggle()

class CartComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {visible: false}
    }

    open() {
        this.setState({visible: true})
    }

    close() {
        this.setState({visible: false})
    }

    toggle() {
        this.setState({visible: !this.state.visible})
    }

    render() {
        const {visible} = this.state
        return <Sidebar.Pushable as={Main}>
            <Sidebar
                as={Segment}
                animation='overlay'
                direction='right'
                onHide={this.close.bind(this)}
                visible={visible}
                width='very wide'
                duration={1000}
                className="cart-bar"
            >
                <Menu fixed='top'>
                    <Menu.Item header><Icon name="shopping-cart" size={28}/></Menu.Item>
                    <Menu.Menu position='right'>
                        <Dropdown icon={<Icon name="more-vertical"/>} item>
                            <Dropdown.Menu>
                                <Dropdown.Header>Favorates</Dropdown.Header>
                                <Dropdown.Item>
                                    <Icon name="star"/> Add to favorates
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>

                <Item.Group divided>
                    <Item>
                        <Item.Content>

                            <Item.Meta>
                                <div className="right floated hover show">
                                    <a className="link">
                                        <Icon name="trash"/>
                                    </a>
                                </div>
                                <a href="">
                                    <Icon name="box"/> suite1
                                </a>
                            </Item.Meta>
                            <Item.Extra>

                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Content>
                            <Item.Meta>
                                <div className="right floated hover show">
                                    <a className="link">
                                        <Icon name="trash"/>
                                    </a>
                                </div>
                                <a href=""><Icon name="folder"/> specs/dir</a>
                            </Item.Meta>
                            <Item.Extra>
                                <Label as='a'><Icon name="box" size={13}/> suite1</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Content>
                            <Item.Meta>
                                <div className="right floated hover show">
                                    <a className="link">
                                        <Icon name="trash"/>
                                    </a>
                                </div>
                                <a href="">
                                    <Icon name="file"/> specs/dir/file.spec
                                </a>
                            </Item.Meta>
                            <Item.Extra>
                                <Label as="a"><Icon name="box" size={13}/> suite1</Label>
                                <Label as="a"><Icon name="folder" size={13}/> dir</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Content>
                            <Item.Meta>
                                <div className="right floated hover show">
                                    <a className="link">
                                        <Icon name="trash"/>
                                    </a>
                                </div>
                                <a href="">
                                    <Icon name="activity"/> Cart should be empty
                                </a>
                            </Item.Meta>
                            <Item.Extra>
                                <Label as="a"><Icon name="box" size={13}/> suite1</Label>
                                <Label as="a"><Icon name="folder" size={13}/> dir</Label>
                                <Label as="a"><Icon name="file" size={13}/> spec.spec</Label>
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
                <Divider/>
                <Button basic><Icon name="play"/></Button>

            </Sidebar>

            <Sidebar.Pusher>
                {this.props.children}
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    }
}

export class CartEntry extends React.Component {
    render() {
        return <a {...this.props} onClick={openCart}>
            {this.props.children}
        </a>
    }
}

export class CartContext extends React.Component {
    render() {
        return <CartComponent ref={cartRef}>
            {this.props.children}
        </CartComponent>
    }
}

