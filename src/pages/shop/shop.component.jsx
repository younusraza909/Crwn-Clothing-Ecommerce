import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import CollectionPage from "../collection/collection.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import { selectCollectionLoaded } from "../../redux/shop/shop.selectors";

import { fetchCollectionStartAsync } from "../../redux/shop/shop.action";

import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

//match object is passed due to Route In Shop ByDefault
class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { fetchCollectionStartAsync } = this.props;
    fetchCollectionStartAsync();
  }

  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner
              isLoading={!isCollectionLoaded}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionLoaded: selectCollectionLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
