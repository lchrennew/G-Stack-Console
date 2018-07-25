import React from 'react'
import {Link} from "react-router-dom";
import {Button, Card} from 'semantic-ui-react'
import ExecuteButton from "./ExecuteButton";
import Icon from "./Icon";
import AddToCart from "./AddToCart";
import {withRouter} from 'react-router-dom'


class SuiteItem extends React.Component {
    render() {
        const {title, description} = this.props
        const item = {
            title,
            href: this.props.location.pathname,
            option: {
                suite: title,
                path: '',
            },
            type: 'suite',
        }
        return <Card>
            <Card.Content>
                <Card.Header className="card-title"><Link to={title}>
                    <Icon name="box" size={22}/> {title}</Link></Card.Header>
            </Card.Content>
            <Card.Content extra>
                <div className="ui three buttons">
                    <AddToCart className="ui basic large button" item={item}>
                        <Icon name="shopping-cart" size={24}/>
                    </AddToCart>
                    <Link to={`${title}/logs`} className="ui basic large button">
                        <Icon name="clock" size={24}/>
                    </Link>
                    <ExecuteButton suite={title} size={24} className="ui basic large button"
                                   title={`Suite:${title}`}/>
                </div>
            </Card.Content>
        </Card>
    }
}

export default withRouter(SuiteItem)