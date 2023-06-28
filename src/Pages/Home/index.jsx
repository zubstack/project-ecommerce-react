import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import ShoppingAside from "../../Components/ShoppingAside";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const { items } = useContext(ShoppingCartContext);
  return (
    <div className="flex flex-col item-center text-center">
      <h1>Home</h1>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
      <ShoppingAside />
    </div>
  );
}

export default Home;
