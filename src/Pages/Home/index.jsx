import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import ShoppingAside from "../../Components/ShoppingAside";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";

function Home() {
  const { items } = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname;
  let currentPathIndex = currentPath.substring(
    currentPath.lastIndexOf("/") + 1
  );

  const filterByCategory = () => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(currentPathIndex)
    );
  };

  const itemsByCategory = filterByCategory();

  console.log(itemsByCategory);

  const [userInput, setUserInput] = useState("");
  const [filteredItems, setFilteredItems] = useState("");

  const filterItems = (items, userInput) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(userInput.toLowerCase())
    );
  };

  useEffect(() => {
    if (userInput) setFilteredItems(filterItems(itemsByCategory, userInput));
  }, [itemsByCategory, userInput]);

  const renderView = () => {
    const itemsToRender =
      userInput.length > 0 ? filteredItems : itemsByCategory;

    if (itemsToRender?.length > 0) {
      return itemsToRender.map((item) => <Card key={item.id} data={item} />);
    } else {
      return <p>No Results Found</p>;
    }
  };
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="font-medium text-xl mb-4">Exclusive products</h1>
      <input
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        type="text"
        placeholder="Search a product"
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
      <ShoppingAside />
    </div>
  );
}

export default Home;
