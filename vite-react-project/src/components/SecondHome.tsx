import React from "react";

import { useAppSelector, useAppDispatch } from "../state/Hooks";
import { ProductContent } from "./CollectionContent";

export function SecondHome(): JSX.Element {
  const imageData = useAppSelector((state) => state.art.imageData);

  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {imageData.map((item) => {
              return <ProductContent {...item} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
