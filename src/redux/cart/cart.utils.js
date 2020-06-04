export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  //We always return new array just bcz react will re render component  if it will find new array if we only change array's object property it will not re render
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  //in this fucntion if it will run first time this part will run and quantity will attatch to object property
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
