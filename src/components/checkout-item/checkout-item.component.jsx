import React from "react";
import { connect } from "react-redux";

import {
  CheckOutItemContainer,
  ImageContainer,
  Image,
  RemoveButtonContainer,
  TextContainer,
  QunatityContainer,
} from "./checkout-item.styles";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartAddedItems, clearItem, addItem, removeItem }) => {
  const { name, quantity, imageUrl, price } = cartAddedItems;

  return (
    <CheckOutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt="Item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QunatityContainer>
        <div onClick={() => removeItem(cartAddedItems)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartAddedItems)}>&#10095;</div>
      </QunatityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartAddedItems)}>
        {/* UTF_8 Dingbats */}
        &#10005;
      </RemoveButtonContainer>
    </CheckOutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
