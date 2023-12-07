////import the ContextAPI for removing the product
import { useCart } from "../context/CartContext";
import "./CartCard.css";
// Access the props of the component ProductCard
export const CartCard = ({ product }) => {
  // access the removeFromCart dispatch function upon clicking "Remove" button
  const { removeFromCart } = useCart();
  // destructure the properties of the component
  const { name, price, image } = product;
  return (
    <div className="cartCard">
      <img src={image} alt={name} />
      <p className="productName">{name}</p>
      <p className="productPrice">${price}</p>
      <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  );
};
