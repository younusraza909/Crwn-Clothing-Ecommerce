import React from "react";
import { DirectoryMenueContainer } from "./directory-style";

import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";

import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenueContainer>
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryMenueContainer>
  );
};

//its same as above but its es6 shortcut
// <div className="directory-menu">
//   {this.state.sections.map(({ id, ...othersectionprop }) => (
//     <MenuItem key={id} {...othersectionprop} />
//   ))}
// </div>;

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
