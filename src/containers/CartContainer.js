import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import * as Message from './../constants/Message';
import {actRemoveProductInCart, actChangeMessage, actUpdateProductInCart } from './../actions/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartitem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartitem = (cart) => {
        var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>;
        var { onDeleteProductInCart, onUpdateProductInCart, onChangeMessage } = this.props;
        if(cart.length > 0) {
            result = cart.map((item, index)=>{
                return (
                    <CartItem 
                        key = {index}
                        item = {item}
                        index = {index}
                        onDeleteProductInCart = {onDeleteProductInCart}
                        onUpdateProductInCart = {onUpdateProductInCart}
                        onChangeMessage = {onChangeMessage}
                    ></CartItem>
                );
            });
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart={cart}></CartResult>
        }
        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onDeleteProductInCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired,
    onUpdateProductInCart: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart : (product) => {
            dispatch(actRemoveProductInCart(product));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        onUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
