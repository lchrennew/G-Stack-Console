import React from 'react'
import {connect} from 'react-redux'
import ExecuteButton from "./ExecuteButton";

const mapStateToProps = (state, props) => {
    const {suite} = props
    let paths = state.cart[suite] ? state.cart[suite].list.map(item => item.option.path) : []
    return {
        suite, paths
    }
}
const mapDispatchToProps = dispatch => {
    return {}
}

class CartExecuteButton extends React.Component {
    render() {
        const {suite, paths} = this.props
        return <ExecuteButton
            className="ui basic button"
            title="Cart"
            {...{suite, paths}}/>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartExecuteButton)