import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Header.css";
//importing ContextAPI value
import { useCart } from "../context/CartContext";

export const Header = () => {
  // destructure the context values from useCart()
  const { cartList } = useCart();
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopinstyle logo" />
        <span>ShopInStyle</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>
          Home
        </NavLink>
        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart: {cartList.length}</span>
      </Link>
    </header>
  );
};
