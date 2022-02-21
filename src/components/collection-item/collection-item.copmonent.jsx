import React from 'react';
import './collection-item.style.scss'
import Button from "../button/button.component";
import {addItem} from "../../redux/cart/cart.action";
import {connect} from "react-redux";


const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item
    return (
        <div className='collection-item'>
            <div
                className='image'
                style={
                    {
                        backgroundImage: `url(${imageUrl})`
                    }
                }
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button onClick={() => addItem(item)} reverse>Add to cart</Button>

        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);