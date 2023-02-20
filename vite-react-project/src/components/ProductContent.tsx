//placeholder for specific product information

import React from "react";
import { useAppSelector, useAppDispatch } from "../state/Hooks";
import { useParams } from "react-router-dom";
import { Error } from "./Error";

export const ProductContent = () => {
  //grab id and search data for matching object
  const ID = Number(useParams().id);
  const imageData = useAppSelector((state) => state.art.imageData);
  const dalle = imageData.find((elem) => elem.id === ID);

  //if page not found
  if (dalle === undefined) {
    return <Error />;
  }

  return <div className="flex">test</div>;
};
