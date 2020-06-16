import React from "react";
import { Route } from "react-router-dom";
import CollectionPage from "../collection/collection.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";

import { updateCollections } from "../../redux/shop/shop.action";

import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

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
    const { updateCollections } = this.props;
    const CollectionRef = firestore.collection("collections");

    //Onsnapshot means whenever refernce updated or this func run for first time firebase will send snapshot of that refernce

    // // // Its Live Straem Method Or Observer pattern
    // CollectionRef.onSnapshot(async (snapshot) => {
    //   const collectionMap = convertCollectionsSnapshotToMap(snapshot);

    //   updateCollections(collectionMap);
    //   this.setState({ loading: false });
    // });

    //Promise Method 1
    CollectionRef.get().then((snapshot) => {
      const collectionMap = convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionMap);
      this.setState({ loading: false });
    });

    //Native Fetch APi Method
    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-clothing-db-f2925/databases/(default)/documents/collections"
    // )
    //   .then((res) => res.json())
    //   .then((collections) => console.log(collections));
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionsPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
