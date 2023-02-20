import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import { addCart, removeCart } from "../state/ArtSlice";
import { useAppDispatch } from "../state/Hooks";
import { NavBar } from "./content/NavBar";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  title: string;
  src: string;
  price: string;
}

export const ProductContent = ({ id, title, src, price }: CartItem) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="border-8 border-[#c3bbb6] h-[250px] w-[250px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/*image*/}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[250px] group-hover:scale-110 transition duration-300"
              src={src}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button>
            <div className="flex justify-center items-center rounded-full text-white w-12 h-12 bg-gull">
              <BsIcons.BsBagPlusFill
                className="text-2xl"
                onClick={(e) => dispatch(addCart({ id, title, src, price }))}
              />
            </div>
          </button>
          <button>
            <div className="flex justify-center items-center rounded-full text-white w-12 h-12 bg-gull">
              <BsIcons.BsBagDashFill
                className="text-2xl"
                onClick={(e) => dispatch(removeCart({ id, title, src, price }))}
              />
            </div>
          </button>
          <Link
            to={`/collection/${id}`}
            className="flex justify-center items-center rounded-full text-white w-12 h-12 bg-gull drop-shadow-xl"
          >
            <CgIcons.CgEyeAlt />
          </Link>
        </div>
      </div>
      {/* title and price */}
      <div>
        <Link to={`/${id}`}>
          <div className="capitalize text-everglade mb-1 font-bold ml-1">
            {title}
          </div>
        </Link>
        <div className="text-sm capitalize text-everglade mb-1 font-bold ml-1">
          {price}
        </div>
      </div>
    </div>
  );
};
