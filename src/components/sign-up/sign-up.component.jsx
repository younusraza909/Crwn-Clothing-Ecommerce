import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../customButton/customButton.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./sign-up.style.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have any account</h2>
        <span>SignUp with your email or password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            label="Your Name Here"
            required
          />

          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Your Email Here"
            required
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Your Password"
            required
          />

          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            label="Kindly Confirm Your Password"
            required
          />

          <CustomButton type="submit">SignUp</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
