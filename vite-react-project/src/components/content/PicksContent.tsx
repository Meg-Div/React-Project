import React from "react";
import { useAppSelector, useAppDispatch } from "../../state/Hooks";

import { Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

export const PicksContent = () => {
  const dispatch = useAppDispatch();

  const artSearch = useAppSelector((state) => state.art.artSearch);
  const pickData = useAppSelector((state) => state.art.pickData);
  return (
    <>
      <div className="pt-20 z-[-1]">
        <div className="">
          <div className="text-2xl pt-5 pb-5 grid text-center ">
            <div className="text-5xl pb-2">Dalle</div>
            Editor's Picks
          </div>
          <div className="grid grid-flow-rows auto-rows-min md:grid-cols-4 justify-items-center justify-center auto-cols-min">
            {pickData.map((item, index) => {
              return (
                <div className="md:w-[20vw]  w-[40vw]">
                  <Link to="#" state={item.id}>
                    <img className="object-fill" src={item.src}></img>
                  </Link>
                  <div className="flex flex-row pb-5 pt-1 justify-between	">
                    <div className="">{item.title}</div>
                    <div className="">{item.price}</div>
                    <button>
                      <BsIcons.BsFillBagPlusFill />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
