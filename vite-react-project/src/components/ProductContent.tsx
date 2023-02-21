import React from "react";
import { useAppSelector, useAppDispatch } from "../state/Hooks";
import { useParams } from "react-router-dom";
import { Error } from "./Error";

export function ProductContent(): JSX.Element {
  //grab id and search data for matching object
  const ID = Number(useParams().id);
  const imageData = useAppSelector((state) => state.art.imageData);
  const found = imageData.find((elem) => elem.id === ID);

  //if page not found
  if (found === undefined) {
    return <Error />;
  }

  return <div className="flex">test</div>;
}
