import React from 'react';
import PreviewCollection from "../preview-collection/preview-collection.component";
import {createStructuredSelector} from "reselect";
import {selectCollectionForPreview} from "../../redux/shop /shop.selector";
import {connect} from "react-redux";

import './collection-overview.styles.scss'

const CollectionOverview = ({collections}) => {
    return (
        <div className='collection-overview'>
            {collections.map(({id, ...otherShopProps}) => <PreviewCollection key={id} {...otherShopProps} />)}
        </div>
    );
};


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})


export default connect(mapStateToProps)(CollectionOverview);