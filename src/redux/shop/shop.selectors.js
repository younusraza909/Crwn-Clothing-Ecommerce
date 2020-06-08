import { createSelector } from "reselect";

const shopCollection = (state) => state.shop;

export const shopCollectionData = createSelector(
  [shopCollection],
  (shop) => shop.collections
);

//in this selector we are just converting our object returned into an array for out some component
export const selectCollectionsForPreview = createSelector(
  [shopCollectionData],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [shopCollectionData],
    (collections) => collections[collectionUrlParam]
  );
