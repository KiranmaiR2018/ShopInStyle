// "CartContext.js" acts as a context API
// createContext() creates the Context API which will store the states
import { createContext, useReducer } from "react";
import { useContext } from "react";
import { cartReducer } from "../reducer/cartReducer";
//intial State
const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialState);
//CartContext becomes the contextAPI
////////////////////////////////
// CartContext.Provider access the "APP" as a child
// Value contains entire State & the methods we are going to define
// value will be accessed by the children i.e. APP
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  // create a dispatch function to define the action-"type" "ADD_TO_CART"
  //to add the particular product to cart
  const addToCart = (product) => {
    // update the carList array with the newly added product using "concat"
    const updatedCartList = state.cartList.concat(product);

    // Calling the updateTotal dispatch function
    updateTotal(updatedCartList);
    // dispatch-action contains "type" of function to perform and "payload" value
    dispatch({
      type: "ADD_TO_CART",
      //this payload acts as a object with key:value pair
      payload: { products: updatedCartList },
    });
  };
  ////////////////////////////////////////////////////////////////
  //create a dispatch function to define the action-"type" "REMOVE_FROM_CART"
  //to remove the particular product from cart
  const removeFromCart = (product) => {
    // use filter() to update the cartList by removing the current product
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    // Calling the updateTotal dispatch function
    updateTotal(updatedCartList);
    dispatch({
      type: "REMOVE_FROM_CART",
      //this payload acts as a object with key:value pair
      payload: { products: updatedCartList },
    });
  };

  // create a dispatch function to define the action-"type" "UPDATE_TOTAL" to update the total cart value
  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => (total = total + product.price));

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total,
      },
    });
  };
  const value = {
    // create some initial state value
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
// "useContext" used by every component in the "children" i.e APP
//useContext() -> allows us to use contexts in a functional component.
// context – an API given to us by React, allowing for the passing of information to child components without the use of props.
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
