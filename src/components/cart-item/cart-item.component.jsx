import React from "react";

//import for styled component
import {
  CartItemContainer,
  CartItemImage,
  cartItemName,
  ItemDetailsContainer,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="Item" />
    <ItemDetailsContainer>
      <cartItemName>{name}</cartItemName>
      <span>
        {quantity} x ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
