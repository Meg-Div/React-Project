import React from "react";

export const FrontPageImage = () => {
  return (
    <>
      <div className="pt-20 z-[-1]">
        <div className=" z-[-1] bg-gradient-to-tr from-summer to-wheat relative  md:pr-10 md:pl-10  justify-center object-center h-[100vh]">
          <img
            className="z-[-1] md:object-contain mix-blend-overlay h-full object-fill"
            src="Dalle_2.png"
            alt=""
          />
          <div className="z-[2] absolute top-1/2 left-1/2 transform -translate-x-1/20 gap-5 -translate-y-1/20  text-black text-6xl font-bold text-center md:inset-y-0 md:right-0 md:top-20 md:left-30 md:-translate-x-0 md:-translate-y-0">
            <div className="text-xl">New Works</div>
            Dalle
          </div>
        </div>
      </div>
    </>
  );
};
