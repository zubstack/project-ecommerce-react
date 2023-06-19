import { FaPlus } from "react-icons/fa";

function Card() {
  return (
    <div className="bg-white cursor-pointer w-56 h-60">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left- bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          Electronics
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://images.pexels.com/photos/3945667/pexels-photo-3945667.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="headphone"
        />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">
          <FaPlus className="text-sm" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="card-span text-sm font-light">Headphones</span>
        <span className="card-span text-lg font-medium">$300</span>
      </p>
    </div>
  );
}

export default Card;
