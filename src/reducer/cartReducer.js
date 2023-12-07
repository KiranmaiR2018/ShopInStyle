// create a reducer function "cartReducer" which takes state and action as arguments and return the next state
// action contains "type" of function to perform and "payload" value
export const cartReducer = (state, action) => {
  //destructure the action function
  const { type, payload } = action;
  // different type of actions
  switch (type) {
    //update the state using the payload value
    case "ADD_TO_CART":
      console.log(payload.products);
      return { ...state, cartList: payload.products };

    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.products };

    case "UPDATE_TOTAL":
      return { ...state, total: payload.total };

    default:
      throw new Error("No case found in cartReducer");
  }
};
