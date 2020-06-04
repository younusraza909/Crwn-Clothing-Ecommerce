import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";
//this is special syntax to import svg component

import { connect } from "react-redux";
//its hight order component function

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.compoent";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SignOut
        </div>
      ) : (
        <Link className="option" to="/signin">
          SignIn
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

//in order to connect our component with state of root user

const mapStateToProps = createStructuredSelector({
  //we can pass state manually in east function or use craete Structured selector which pass high level state directly into each subsequent
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

//here state refers to main root reducers

export default connect(mapStateToProps)(Header);
//connect(mapStateToProps) this return a fucntion in which we have to passed Header
