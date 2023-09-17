import { useParams } from "react-router-dom";
import endpoints from "../../services/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";

function Specifications() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  async function findProduct() {
    try {
      const response = await axios.get(endpoints.getProduct(id));
      setProduct(response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    findProduct();
  }, []);

  console.log("product", product);

  if (!Object.keys(product).length) return;

  return (
    <>
      <div className="bg-white cursor-pointer w-full h-4/5 container ">
        <figure className="relative mb-4 w-full h-3/5">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={product?.item.image_url}
            alt="headphone"
          />
        </figure>
        <p className="flex justify-between items-center mb-4 ml-2">
          <span className="card-span text-lg font-medium tx-title">
            {product?.item.name}
          </span>
          <span className="card-span text-2xl font-medium tx-price min-w-[100px]">
            $ {product?.item.price}
          </span>
        </p>
        <p className="text-start font-light mb-8 ml-2">
          {product?.item.description}
        </p>
      </div>
    </>
  );
}

export default Specifications;
