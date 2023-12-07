// importing CustomHook
import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  // using CustomHook useTitle to pass the page title as a parameter
  useTitle("Home");
  // images stored in public path "assets"
  // create array of product objects with key-value pairs
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "/assets/images/1001.png",
    },
    {
      id: 2,
      name: "boAt Rockerz 450",
      price: 49,
      image: "/assets/images/1002.png",
    },
    {
      id: 3,
      name: "JBL Tune 760NC",
      price: 179,
      image: "/assets/images/1003.png",
    },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 39,
      image: "/assets/images/1004.png",
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
      image: "/assets/images/1005.png",
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      image: "/assets/images/1006.png",
    },
  ];
  //using map function access the array of objects and assign them to ProductCard component
  return (
    <main>
      <section className="products">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
