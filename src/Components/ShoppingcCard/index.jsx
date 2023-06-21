import { FaTimes } from "react-icons/fa";

function ShoppingCard({ data }) {
  return (
    <div className="flex justify-between items-center p-1">
      <div className="flex items-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={data.images[0]}
            alt=""
          />
        </figure>
        <p className="text-sm font-light">{data.title}</p>
      </div>
      <div className="flex items-center gap-4">
        <p className="text-lg font-medium">$ {data.price}</p>
        <FaTimes className="h-3 w-3 text-black cursor-pointer "></FaTimes>
      </div>
    </div>
  );
}

export default ShoppingCard;
