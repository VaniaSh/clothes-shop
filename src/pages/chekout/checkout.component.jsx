import React from 'react';
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectCartItem, selectCartTotal} from "../../redux/cart/cart.selector";

import './checkout.styles.scss'
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({cartItems, total}) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>PRODUCT</span>
                </div>
                <div className="header-block">
                    <span>DESCRIPTION</span>
                </div>
                <div className="header-block">
                    <span>QUANTITY</span>
                </div>
                <div className="header-block">
                    <span>PRICE</span>
                </div>
                <div className="header-block">
                    <span>REMOVE</span>
                </div>

            </div>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} item={cartItem} />
            ))}
            <div className='total'>TOTAL: ${total}</div>


        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);