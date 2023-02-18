import React from 'react'
import { imageData } from './DalleData'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../state/Hooks'

export const PicksContent = () => {

    const artSearch = useAppSelector(s => s.art.artSearch)
    
    let filteredArray = imageData;
    if (artSearch) {
        filteredArray = filteredArray.filter(((elem) => elem.title.toLowerCase().includes(artSearch.toLowerCase())))
    }

  return (
    <>
    <div className="pt-20 z-[-1]">
    <div className="">
        <div className="text-2xl pt-5 pb-5 grid text-center ">
        <div className="text-5xl pb-2">Dalle</div>
            Editor's Picks</div>
        <div className="md:flex md:flex-row grid gap-5 flex-wrap justify-center pt-5">
        {filteredArray.map((item, index) => {
            return (
                <div className="md:w-[20vw] md:h-[20vw] w-[40vw] h-[40vw]">
                <Link to="#" state={item.id}>
                    <img className="object-fill" src={item.src}></img>
                </Link>
                </div>
            )
        })}
        </div>
    </div>
    </div>
    </>
  )
}
