import React from "react";
import { useAppSelector, useAppDispatch } from "../state/Hooks";
import { Link } from "react-router-dom";
import { addCart, removeCart, removeItem } from "../state/ArtSlice";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { CartItem } from "../state/ArtSlice";

export const CartContent = ({ id, title, src, price, amount }: CartItem) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-everglade">
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
              className="text-lg font-medium max-w-[240px] text-everglade hover:font-extrabold"
            >
              {title}
            </Link>
            {/*Remove/add icons*/}
            <div className="text-xl cursor-pointer">
              <AiIcons.AiOutlineClose
                className="text-gull hover:text-rose-600 transition mt-1 "
                onClick={(e) =>
                  dispatch(removeCart({ id, title, src, price, amount }))
                }
              />
            </div>
          </div>
          <div className=" flex gap-x-1 h-[36px] text-md">
            {/* quantity */}

            <div className="flex flex-1 max-w-[100px] items-center h-full border text-everglade font-medium">
              {/* minus icon */}
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoIcons.IoIosRemoveCircle
                  onClick={(e) =>
                    dispatch(removeItem({ id, title, src, price, amount }))
                  }
                />
              </div>

              {/*amount */}
              <div className="h-full flex justify-center items-center px-2">
                {amount}
              </div>

              {/* plus icon */}
              <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
                <IoIcons.IoIosAddCircle
                  onClick={(e) =>
                    dispatch(addCart({ id, title, src, price, amount }))
                  }
                />
              </div>
            </div>
            {/* item price */}
            <div className="flex-1 flex items-center justify-around">
              ${price}.00
            </div>
            {/* final price */}
            <div className="flex-1 flex justify-end items-center text-everglade font-medium ">
              {`${price * amount}`}.00{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
