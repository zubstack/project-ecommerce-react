import PromotionCard from "../PromotionCard";
import productsInPromotion from "../../utils/promotions";

function Promotions({ openProductDetails, products }) {
  return (
    <div className="flex space-x-40 bg-blue-500 py-8 px-16 rounded-md mb-12">
      <PromotionCard
        openProductDetails={openProductDetails}
        data={products[productsInPromotion[0]]}
      />
      <PromotionCard
        openProductDetails={openProductDetails}
        data={products[productsInPromotion[1]]}
      />
    </div>
  );
}

export default Promotions;
