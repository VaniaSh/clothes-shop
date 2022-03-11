import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directory.selector";


const Directory = ({section}) => {
    return (
        <div className="directory-menu">
            {section.map(({id, ...otherSectionProps}) => <MenuItem key={id} {...otherSectionProps}/>)}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    section: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)