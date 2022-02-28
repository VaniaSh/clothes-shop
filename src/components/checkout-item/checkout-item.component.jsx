import React from 'react';
import {clearItemFromCheckout, addItem, removeItem} from '../../redux/cart/cart.action'


import './checkout.item.styles.scss';
import {connect} from "react-redux";

const CheckoutItem = ({item, clearItem, addItem, removeItem}) => {

    const {imageUrl, name, quantity, price} = item
    return (
        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=>removeItem(item)}>-</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>addItem(item)}>+</div>
            </span>
            <span className="price">{price}</span>
            <div className='remove-button' onClick={() => clearItem(item)}>&#10006;</div>
        </div>)
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCheckout(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);