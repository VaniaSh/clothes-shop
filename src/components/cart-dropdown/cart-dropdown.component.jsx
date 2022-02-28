import React from 'react';
import {withRouter} from "react-router-dom";

import './cart-dropdown.styles.scss'

import Button from "../button/button.component";
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItem} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";
import {toggleCartHidden} from "../../redux/cart/cart.action";

const CartDropdown = ({cartItems, history, dispatch}) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map(cardItem => (<CartItem key={cardItem.id} item={cardItem}/>))
                }
            </div>
            <Button onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>CHECK OUT</Button>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdown));