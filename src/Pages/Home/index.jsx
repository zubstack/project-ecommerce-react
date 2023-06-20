import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import useFetch from "../../Hooks/useFetch";
import { urlApi } from "../../Data";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const items = useFetch(`${urlApi}/products`);

  return (
    <div className="flex flex-col item-center text-center">
      <h1>Home</h1>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <ProductDetail />
    </div>
  );
}

export default Home;
