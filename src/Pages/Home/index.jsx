import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import ShoppingAside from "../../Components/ShoppingAside";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const { items, userInput, setUserInput } = useContext(ShoppingCartContext);
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="font-medium text-xl mb-4">Exclusive products</h1>
      <input
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        type="text"
        placeholder="Search a product"
        onChange={(event) => {
          setUserInput("Searched: " + event.target.value);
          console.log(userInput);
        }}
      />
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
