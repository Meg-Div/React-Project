import * as BsIcons from "react-icons/bs";
import * as CgIcons from "react-icons/cg";
import { addCart, checkProduct, removeItem } from "../state/ArtSlice";
import { useAppDispatch } from "../state/Hooks";
import { Link } from "react-router-dom";
import { CartItem } from "../state/ArtSlice";

export function CollectionContent({
  id,
  title,
  src,
  price,
  amount,
}: CartItem): JSX.Element {
  const dispatch = useAppDispatch();
  console.log(src);
  return (
    <div className="pt-10">
      <div className="border-8 border-[#c3bbb6] h-[250px] w-[250px] mb-4 relative overflow-hidden group transition ">
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
            <div
              className="flex justify-center items-center rounded-full text-white w-12 h-12 bg-gull"
              onClick={(e) =>
                dispatch(addCart({ id, title, src, price, amount }))
              }
            >
              <BsIcons.BsBagPlusFill className="text-2xl" />
            </div>
          </button>
          <button>
            <div
              className="flex justify-center items-center rounded-full text-white w-12 h-12 bg-gull"
              onClick={(e) =>
                dispatch(removeItem({ id, title, src, price, amount }))
              }
            >
              <BsIcons.BsBagDashFill className="text-2xl" />
            </div>
          </button>
          <div
            onClick={(e) =>
              dispatch(checkProduct({ id, title, src, price, amount }))
            }
          >
            <Link
              to={`/collection/${id}`}
              className="flex justify-center items-center rounded-full text-white w-12 h-12 bg-gull drop-shadow-xl"
            >
              <CgIcons.CgEyeAlt />
            </Link>
          </div>
        </div>
      </div>
      {/* title and price */}

      <div className="capitalize text-everglade mb-1 font-bold ml-1">
        {title}
      </div>
      <div className="text-sm capitalize text-everglade mb-1 font-bold ml-1">
        ${price}
      </div>
    </div>
  );
}
