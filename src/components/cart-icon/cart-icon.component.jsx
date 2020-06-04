import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg";

import "./cart-icon.styles.scss";

import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStatetoProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
//if we cahnge redux user satate this function will run bcz state will change with new object and it computationaly not good....in order to prevent this we use reselect library for memoization which will only rerender this component if state change in a way this component cares
//npm install reselect
//we have applied reusable code in redux folder for it

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);
