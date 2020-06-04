import React from "react";
import CartItem from "../cart-item/cart-item.component";

import CustomButton from "../customButton/customButton.component";

import { withRouter } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";

import "./cart-dropdown.styles.scss";
import { createStructuredSelector } from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your Cart Is Empty </span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
//there is a shorthand for disptach ..if we have single dispatch functionality and wee dont pass second argument to connect it will by default send dispatch as prop into component and we can use directly

export default withRouter(connect(mapStateToProps)(CartDropdown));
