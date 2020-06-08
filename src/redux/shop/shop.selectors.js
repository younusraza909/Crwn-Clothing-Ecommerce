import { createSelector } from "reselect";

const shopCollection = (state) => state.shop;

export const shopCollectionData = createSelector(
  [shopCollection],
  (shop) => shop.collections
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [shopCollectionData],
    (collections) => collections[collectionUrlParam]
  );
