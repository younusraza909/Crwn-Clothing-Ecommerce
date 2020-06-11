import React from "react";

import { withRouter } from "react-router-dom";

import {
  CollectionPreviewContainer,
  CollectionPreviewPreview,
  CollectionPreviewTitle,
} from "./colection-preview";

import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items, routeName, history, match }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitle
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
      </CollectionPreviewTitle>
      <CollectionPreviewPreview>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </CollectionPreviewPreview>
    </CollectionPreviewContainer>
  );
};

export default withRouter(CollectionPreview);
