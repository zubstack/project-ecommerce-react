import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import ShoppingAside from "../../Components/ShoppingAside";
import { useContext, useEffect, useState } from "react";
import { ShoppingCartContext } from "../../Context";
import productServices from "../../services/products";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    productServices.getAll().then((data) => setProducts(data));
  }, []);

  console.log("products", products);

  //Products by category: [categoryProducts]
  //Read from path:
  const currentPath = window.location.pathname;
  let currentPathIndex = currentPath.substring(
    currentPath.lastIndexOf("/") + 1
  );
  //Choose the appropiate products:
  const categoryProducts = products?.filter((item) =>
    item.category.name.toLowerCase().includes(currentPathIndex)
  );

  //Products by user filter: [filteredProducts]
  const [userInput, setUserInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState("");

  //Selection:
  const filterItems = (userInput) => {
    return products?.filter((item) =>
      item.title.toLowerCase().includes(userInput.toLowerCase())
    );
  };
  //Setting (if user inputs):
  useEffect(() => {
    if (userInput) setFilteredProducts(filterItems(userInput));
  }, [categoryProducts, userInput]);

  //Render functions:

  const renderView = () => {
    const productsToRender =
      userInput.length > 0 ? filteredProducts : categoryProducts;

    //Problem: Path category - All category is valid
    // If a category doesnt have items, should be display "New items here soon..."

    if (productsToRender?.length > 0) {
      return productsToRender.map((item) => <Card key={item.id} data={item} />);
    } else {
      return <p>No Results Found</p>;
    }
  };
  return (
    <div className="flex flex-col items-center text-center">
      <h1 className="font-medium text-xl mb-4">
        {currentPathIndex === "" ? "HOME" : currentPathIndex.toUpperCase()}
      </h1>
      <input
        className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
        type="text"
        placeholder="Search a product"
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />
      <i className="p-10 bg-slate-500 mb-10">
        Semanal Offerts Section From 1 to 4 Agout 50% OFF (pending)
      </i>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
      <ShoppingAside />
    </div>
  );
}

export default Home;
