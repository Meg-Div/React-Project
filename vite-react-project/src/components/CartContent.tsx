import React from "react";
import { useAppSelector, useAppDispatch } from "../state/Hooks";
import { Link } from "react-router-dom";

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
      <div className="w-full min-h-[150px] flex items-center gap-x-2">
        {/*image*/}
        <Link to={`/collection/${id}`}>
          <img className="max-w-[80px]" src={src} alt="" />
        </Link>
      </div>
    </div>
  );
};
