import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import ShoppingAside from "../../components/ShoppingAside";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PromotionCard from "../../components/PromotionCard";
import productsInPromotion from "../../utils/promotions";
import axios from "axios";
import endpoints from "../../services/endpoints";

function Home() {
  // const categoriesList = [
  //   "clothes",
  //   "furniture",
  //   "electronics",
  //   "toys",
  //   "others",
  // ];

  // const navigate = useNavigate();

  // //Read current category from path:
  // const currentPath = window.location.pathname;
  // let currentPathIndex = currentPath.substring(
  //   currentPath.lastIndexOf("/") + 1
  // );

  // // Verify validation of the current catery:

  // useEffect(() => {
  //   categoriesList.includes(currentPathIndex) || currentPathIndex == "" ? (
  //     <Home />
  //   ) : (
  //     navigate("/category/not-found")
  //   );
  // }, []);

  //Products: ==============================================================

  const [products, setProducts] = useState([]);
  useEffect(() => {
    // productServices.getAll().then((data) => setProducts(data));
    axios
      .get(endpoints.getAll)
      .then((data) => {
        setProducts(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Products by category: [categoryProducts] =============================
  //Choose the appropiate products:
  // const categoryProducts = products?.filter((item) =>
  //   item.category.name.toLowerCase().includes(currentPathIndex)
  // );

  // //Products by user filter: [filteredProducts] =============================
  // const [userInput, setUserInput] = useState("");
  // const [filteredProducts, setFilteredProducts] = useState("");

  // //Selection:
  // const filterItems = (userInput) => {
  //   return products?.filter((item) =>
  //     item.title.toLowerCase().includes(userInput.toLowerCase())
  //   );
  // };
  // //Setting (if user inputs):
  // useEffect(() => {
  //   if (userInput) setFilteredProducts(filterItems(userInput));
  // }, [categoryProducts, userInput]);

  //Details: ==========================================================

  const [detailsOpen, setDetailsOpen] = useState(false);
  const closeProductDetails = () => setDetailsOpen(false);
  const openProductDetails = () => setDetailsOpen(true);

  //Shopping Cart : ======================================================

  const [shoppingOpen, setShoppingOpen] = useState(false);
  const openShoppingAside = () => setShoppingOpen(true);
  const closeShoppingAside = () => setShoppingOpen(false);

  //Render functions: ==========================================================

  const renderView = () => {
    //   const productsToRender =
    //     userInput.length > 0 ? filteredProducts : categoryProducts;

    //   //PENDING: Path category - All category is valid
    //   //PENDING: If a category doesnt have items, should be display "New items here soon..."
    //   //PENDING: Semanal offerts
    //   //PENDING: Loading state
    //   //PENDING: Scroll bar
    //   if (productsToRender?.length > 0) {
    // return productsToRender.map((item) => (
    return products.map((item) => (
      <Card
        key={item.id}
        openProductDetails={openProductDetails}
        openShoppingAside={openShoppingAside}
        data={item}
      />
    ));
    // } else {
    //   return <p>No Results Found</p>;
    // }
  };

  return (
    <div className="flex flex-col items-center text-center">
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
