import React from 'react';

import {ReactComponent as Cart} from "../../assets/shopping-bag.svg";

import './cart.styles.scss'
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.action";

const CartIcon = ({toggleCartHidden, cartCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <Cart className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>

        </div>
    );
};

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartCount: cartItems.reduce((acc, cartItem)=> acc + cartItem.quantity, 0)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);