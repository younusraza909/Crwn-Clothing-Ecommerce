import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.style";

//wrappedComponent is basically a component if there will be loading property there to true it eill return loading component else compoennt itself
const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
