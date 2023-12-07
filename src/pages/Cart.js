//importing ContextAPI value
import { useCart } from "../context/CartContext";
// importing CustomHook
import { useTitle } from "../hooks/useTitle";
import { CartCard } from "../components";

export const Cart = () => {
  // destructure the context values from useCart()
  const { total, cartList } = useCart();
  // using CustomHook useTitle to pass the page title as a parameter
  useTitle("Cart");
  return (
    <main>
      <section className="cart">
        <h1>
          Cart Items: {cartList.length} | ${total}
        </h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
