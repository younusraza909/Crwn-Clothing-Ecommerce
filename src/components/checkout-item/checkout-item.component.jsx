import React from "react";
import { connect } from "react-redux";
import "./checkout-item.styles.scss";
import {
  clearItemFromCart,
  addItem,
  removeItems,
  removeItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItems, clearItem, addItem, removeItem }) => {
  const { name, quantity, imageUrl, price } = cartItems;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItems)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItems)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(cartItems)}>
        {/* UTF_8 Dingbats */}
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
