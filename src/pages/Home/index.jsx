import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import ShoppingAside from "../../components/ShoppingAside";
import { useContext, useEffect, useState } from "react";
import PromotionCard from "../../components/PromotionCard";
import productsInPromotion from "../../utils/promotions";
import { ProductContext } from "../../context/ProductContext";
import Promotions from "../../components/Promotions/Promotions";

function Home() {
  //Products: ==============================================================
  const { products, showPromotions } = useContext(ProductContext);
  console.log("showPromotions", showPromotions);
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
    if (products?.length > 0) {
      return products.map((item) => (
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
    <div className="flex flex-col items-center text-center">
      {showPromotions && (
        <Promotions
          openProductDetails={openProductDetails}
          products={products}
        />
      )}
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg mb-12">
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
      {showPromotions && (
        <Promotions
          openProductDetails={openProductDetails}
          products={products}
        />
      )}
    </div>
  );
}

export default Home;
