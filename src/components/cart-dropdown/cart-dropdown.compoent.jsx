import React from "react";
import CartItem from "../cart-item/cart-item.component";

import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.action";

//Imports For Styled Components
import {
  CartDropDownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropDownButton,
} from "./cart-dropdown.styles";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropDownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your Cart Is Empty </EmptyMessageContainer>
      )}
    </CartItemsContainer>
    {/* Its Actually Custom Button But We have Used Styled Component in it */}
    <CartDropDownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropDownButton>
  </CartDropDownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
//there is a shorthand for disptach ..if we have single dispatch functionality and wee dont pass second argument to connect it will by default send dispatch as prop into component and we can use directly

export default withRouter(connect(mapStateToProps)(CartDropdown));
