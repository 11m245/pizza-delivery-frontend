export function cartReducer(cartItems, action) {
  switch (action.type) {
    case "ADDED":
      const crproduct = action.payload;
      let filterProducts = [];
      //   const updatedProduct = { ...crproduct, qty: 0 };
      const foundProduct =
        cartItems.length > 0 &&
        cartItems.find((product) => product._id === crproduct._id);
      if (cartItems.length > 0) {
        filterProducts = cartItems.filter(
          (product) => product._id !== crproduct._id
        );
      }
      //   console.log("found", foundProduct);
      if (foundProduct) {
        crproduct.qty = crproduct.qty + 1;
      } else {
        crproduct.qty = 1;
      }

      return [...filterProducts, crproduct];

    case "REMOVED":
      const crproduct1 = action.payload;
      let filterProducts1 = [];
      //   const updatedProduct = { ...crproduct, qty: 0 };
      const foundProduct1 =
        cartItems.length > 0 &&
        cartItems.find((product) => product._id === crproduct1._id);
      if (cartItems.length > 0) {
        filterProducts1 = cartItems.filter(
          (product) => product._id !== crproduct1._id
        );
      }
      //   console.log("found", foundProduct);
      if (foundProduct1?.qty >= 2) {
        crproduct1.qty = crproduct1.qty - 1;
      } else {
        crproduct1.qty = 1;
        return [...filterProducts1];
      }

      return [...filterProducts1, crproduct1];
    case "GET CART":
      return cartItems;
    default:
      return cartItems;
  }
}
