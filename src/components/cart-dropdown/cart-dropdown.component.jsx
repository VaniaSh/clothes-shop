import React from 'react';

import './cart-dropdown.styles.scss'

import Button from "../button/button.component";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({cartItems}) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(cardItem => (<CartItem key={cardItem.id} item={cardItem}/>))

                }
            </div>
            <Button>CHECK OUT</Button>
        </div>
    );
};

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown);