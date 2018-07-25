import React from 'react'
import {removeFromCart} from "../actions";
import {connect} from 'react-redux'

const mapStateToProps = (state, props) => {
    return {}
}
const mapDispatchToProps = dispatch => {
    return {
        remove: key => dispatch(removeFromCart(key))
    }
}

class RemoveFromCart extends React.Component {

    onClick(e) {
        e.preventDefault()
        const {item: {key}, remove} = this.props
        remove(key)
    }

    render() {
        return <a className={this.props.className}
                  onClick={this.onClick.bind(this)}>
            {this.props.children}
        </a>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveFromCart)