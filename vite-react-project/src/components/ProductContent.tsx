//placeholder for specific product information

import React from "react";
import { useAppSelector, useAppDispatch } from "../state/Hooks";
import { Link, useLocation, useParams } from "react-router-dom";
import { Error } from "./Error";

interface CartItem {
  id: number;
  title: string;
  src: string;
  price: string;
}

export const ProductContent = () => {
  const ID = Number(useParams().id);
  const imageData = useAppSelector((state) => state.art.imageData);
  const dalle = imageData.find((elem) => elem.id === ID);
  if (dalle === undefined) {
    return <Error />;
  }

  return <div className="flex">test</div>;
};
