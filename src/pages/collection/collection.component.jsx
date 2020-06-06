import React from "react";
import "./collection.style.scss";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => (
  <div className="collection-page">
    <h2>Collection Page</h2>
  </div>
);

//it takes 2 param first redux state as state and second own props
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
