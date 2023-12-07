//import the ContextAPI for adding the product
import { useEffect } from "react";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";
import { useState } from "react";
// Access the props of the component ProductCard
export const ProductCard = ({ product }) => {
  // access the addToCart dispatch function upon clicking "Add To cart" button
  // destructing the useCart Context API
  const { cartList, addToCart, removeFromCart } = useCart();
  const [InCart, setInCart] = useState(false);
  // destructure the properties of the component
  const { id, name, price, image } = product;

  // useEffect method to find the product is in the cartList or not
  useEffect(() => {
    // returns true if the product is in the cartList
    const productInCart = cartList.find((cartProduct) => cartProduct.id === id);
    if (productInCart) {
      setInCart(true);
    } else {
      setInCart(false);
    }
  }, [cartList, id]);
  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {InCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add To Cart</button>
        )}
      </div>
    </div>
  );
};
