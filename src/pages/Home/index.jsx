import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import ShoppingAside from "../../components/ShoppingAside";
import { useEffect, useState } from "react";
import PromotionCard from "../../components/PromotionCard";
import productsInPromotion from "../../utils/promotions";
import { useProductContext } from "../../context/ProductContext";

function Home() {
  //Products: ==============================================================
  const { products } = useProductContext();

  //Filter products: ===================================================
  const [userInput, setUserInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState("");

  const filterItems = (userInput) => {
    return products?.filter((product) =>
      product.item.name.toLowerCase().includes(userInput.toLowerCase())
    );
  };
  useEffect(() => {
    if (userInput) setFilteredProducts(filterItems(userInput));
  }, [userInput]);

  //Details : ======================================================
  const [detailsOpen, setDetailsOpen] = useState(false);
  const closeProductDetails = () => setDetailsOpen(false);
  const openProductDetails = () => setDetailsOpen(true);

  //Shopping Cart : ======================================================
  const [shoppingOpen, setShoppingOpen] = useState(false);
  const openShoppingAside = () => setShoppingOpen(true);
  const closeShoppingAside = () => setShoppingOpen(false);

  //Render function: ====================================================
  const renderView = () => {
    const productsToRender = userInput.length > 0 ? filteredProducts : products;

    if (productsToRender?.length > 0) {
      return productsToRender.map((item) => (
        <Card
          key={item.id}
          openProductDetails={openProductDetails}
          openShoppingAside={openShoppingAside}
          data={item}
        />
      ));
    } else {
      return <p>No Results Found</p>;
    }
  };

  return (
    <div className="flex flex-col items-center text-center mt-20">
      <input
        className="rounded-lg border border-black/50 w-[350px] py-2 px-3 focus:outline-none"
        type="text"
        placeholder="Search a product"
        onChange={(event) => {
          setUserInput(event.target.value);
        }}
      />
      <div className="flex space-x-40">
        <PromotionCard
          openProductDetails={openProductDetails}
          data={products[productsInPromotion[0]]}
        />
        <PromotionCard
          openProductDetails={openProductDetails}
          data={products[productsInPromotion[1]]}
        />
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ShoppingAside
        closeShoppingAside={closeShoppingAside}
        shoppingOpen={shoppingOpen}
      />
      <ProductDetail
        detailsOpen={detailsOpen}
        closeProductDetails={closeProductDetails}
      />
    </div>
  );
}

export default Home;
