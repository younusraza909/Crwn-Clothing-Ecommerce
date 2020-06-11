import React from "react";

import {
  FormInputContainer,
  FormInputLabel,
  FormGroupContainer,
} from "./form-input.style";

const FormInput = ({ handleChange, label, ...props }) => (
  <FormGroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={`${props.value.length ? "shrink" : ""} `}>
        {label.toUpperCase()}
      </FormInputLabel>
    ) : null}
  </FormGroupContainer>
);

export default FormInput;
