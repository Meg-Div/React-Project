import React from "react";
import { useAppSelector, useAppDispatch } from "../state/Hooks";
import { Link } from "react-router-dom";
import { addCart, removeCart } from "../state/ArtSlice";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

interface CartItem {
  id: number;
  title: string;
  src: string;
  price: string;
}

export const CartContent = ({ id, title, src, price }: CartItem) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/*image*/}

        <Link to={`/collection/${id}`}>
          <img className="max-w-[80px]" src={src} alt="" />
        </Link>

        <div className="w-full flex flex-col ">
          {/*title and remove icon*/}
          <div className="flex justify-between mb-2">
            {/*title*/}

            <Link
              to={`/collection/${id}`}
              className="text-md font-medium max-w-[240px] text-everglade hover:font-bold hover:text-lg"
            >
              {title}
            </Link>
            {/*Remove/add icons*/}
            <div className="text-xl cursor-pointer">
              <AiIcons.AiOutlineClose
                className="text-gull hover:text-rose-600 transition mt-1 "
                onClick={(e) => dispatch(removeCart({ id, title, src, price }))}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
