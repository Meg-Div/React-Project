import React from 'react'
import { imageData } from './DalleData'
import { Link } from 'react-router-dom'

export const PicksContent = () => {
  return (
    <>
    <div className="pt-20 z-[-1]">
        <div className="text-5xl pt-5 pb-5 flex justify-center">Editor's Picks</div>
        <div className="flex flex-row gap-5 flex-wrap justify-center">
        {imageData.map((item, index) => {
            return (
                <div className="w-[20vw] h-[20vw]">
                <Link to="#" state={item.id}>
                    <img className="object-fill" src={item.src}></img>
                </Link>
                </div>
            )
        })};
        </div>
    </div>
    </>
  )
}
