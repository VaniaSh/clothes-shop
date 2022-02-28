import React from 'react';

import {ReactComponent as Cart} from "../../assets/shopping-bag.svg";
import {createStructuredSelector} from "reselect";

import './cart.styles.scss'
import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.action";
import {selectCartItemCount} from "../../redux/cart/cart.selector";

const CartIcon = ({toggleCartHidden, cartCount}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <Cart className='shopping-icon'/>
            <span className='item-count'>{cartCount}</span>

        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});


export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);