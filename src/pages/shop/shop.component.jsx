import React from "react";
import { Route } from "react-router-dom";

import { fetchCollectionStartAsync } from "../../redux/shop/shop.action";

import { connect } from "react-redux";

import CollectionOverviewContainer from "../../components/collections-overview/collection-overview.container.component";

import CollectionPageContainer from "../../pages/collection/collection-page.container";

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
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
