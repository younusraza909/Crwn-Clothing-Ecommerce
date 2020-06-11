import React from "react";
import { ReactComponent as Logo } from "../../assests/crown.svg";
import { auth } from "../../firebase/firebase.utils";
//this is special syntax to import svg component
import { connect } from "react-redux";

//its hight order component function
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.compoent";

//Selector Import
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

//Styled.jsx Imports
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  // OptionDiv,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SignOut
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SignIn</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
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
