import React from "react";
import { useAppSelector, useAppDispatch } from "../state/Hooks";
import { addCart } from "../state/ArtSlice";

export function Product(): JSX.Element {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.art.product);

  const id = product[0].id;
  const title = product[0].title;
  const price = product[0].price;
  const amount = product[0].amount;
  const src = product[0].src;

  return (
    <>
      <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center ">
        <div className="container mx-auto">
          {/* image and text */}
          <div className="flex flex-col lg:flex-row items-center mb-8 lg:m-b-0">
            {/* image */}
            <div className="flex flex-1 justify-center items-center">
              <img
                className="md:max-w-[400px] md:mt-10 max-w-[200px] border-8 border-summer"
                src={src}
                alt=""
              />
            </div>
            {/* text */}
            <div className="flex-1 text-center lg:text-center">
              <h1 className="text-[26px] font-medium mb-2 mt-3 max-w-[450px] mx-auto">
                {product[0].title}
              </h1>
              <div className="text-xl font-medium mb-6">
                ${product[0].price}
              </div>
              <button
                className="bg-summer py-4 px-8 rounded-full text-white"
                onClick={(event: React.MouseEvent<HTMLElement>) =>
                  dispatch(addCart({ id, title, src, price, amount }))
                }
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
