import {connect} from 'react-redux'
import CartItemList from "./CartItemList";

const mapStateToProps = (state, props) => {
    return {
        items: state.cart.list
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemList)