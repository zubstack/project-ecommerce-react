import { useParams } from "react-router-dom";
import endpoints from "../../services/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

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
      <div className="bg-white cursor-pointer w-full container h-[84vh] flex flex-col justify-center">
        <div className="flex items-center">
          <div className="flex-col justify-between items-center mb-4 ml-2 px-4 ">
            <p className="card-span text-4xl font-light  tx-title mt-4 mb-8">
              <span>
                {" "}
                {product?.item.name} - {product?.item.model}
              </span>
            </p>
            <p className="w-[90%]  font-bold font-roboto  mb-4 flex justify-between">
              {product?.item.brand}
              <p className="font-rajdhani text-2xl">${product?.item.price}</p>
            </p>
            <p className="font-light mb-4 w-[90%]">
              {product?.item.description}
            </p>
            <ul className="">
              <li className="flex gap-2 py-[2px]">
                Additional features:
                <p className="font-light">
                  {product.specifications.additional_features}
                </p>
              </li>
              <li className="flex gap-2 py-[2px]">
                Backlighting:
                <p className="font-light">
                  {product.specifications.backlighting}
                </p>
              </li>
              <li className="flex gap-2 py-[2px]">
                Connectivity:
                <p className="font-light">
                  {product.specifications.connectivity}
                </p>
              </li>
              <li className="flex gap-2 py-[2px]">
                Dimensions:
                <p className="font-light">
                  {product.specifications.dimensions}
                </p>
              </li>
              <li className="flex gap-2 py-[2px]">
                Keyboard type:
                <p className="font-light">
                  {product.specifications.keyboard_type}
                </p>
              </li>

              <li className="flex gap-2 py-[2px]">
                Layout:
                <p className="font-light">{product.specifications.layout}</p>
              </li>
              <li className="flex gap-2 py-[2px]">
                Shipping information:
                <p className="font-light">
                  {product.specifications.shipping_information}
                </p>
              </li>
              <li className="flex gap-2 py-[2px]">
                Switch type:
                <p className="font-light">
                  {product.specifications.switch_type}
                </p>
              </li>
              <li className="flex gap-2 py-[2px]">
                Weight:
                <p className="font-light">{product.specifications.weight}</p>
              </li>
            </ul>
          </div>
          <div className="w-2/5">
            <figure className="relative mb-4  h-80 border border-black/50 rounded-md">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={product?.item.image_url}
                alt="headphone"
              />
            </figure>
            <p className="text-[40px] my-4 flex  gap-4 px-4 items-center">
              {product?.item.rating}
              <div className="flex">
                {" "}
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </div>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Specifications;
