import React from 'react'
import { useContext } from 'react'
import * as BsIcons from "react-icons/bs"
import * as AiIcons from "react-icons/ai"


import { useAppSelector, useAppDispatch } from '../../state/Hooks'
import { Link } from 'react-router-dom'
import { addCart } from '../../state/ArtSlice'
import { Product } from '../content/Product'


export const SecondHome = () => {
    const dispatch = useAppDispatch();
    const imageData = useAppSelector((state) => state.art.imageData)

  return (
    <div>
        <section className="py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                {imageData.map((item) => {
              return (
                <div>
                <div className="border border-[#9abda9] h-[300px] mb-4 relative overflow-hidden group transition">
                    <div className="w-full h-full flex justify-center items-center">

                    {/*image*/}
                        <div className='w-[200px] mx-auto flex justify-center items-center'>
            
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={item.src} alt="" />
                        </div>
                    </div>
                    {/* buttons */} 
                    <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button>
                            <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500'>
                                <AiIcons.AiFillPlusCircle className="text-3xl" />
                            </div>
                        </button>
                        <Link to={`/${item.id}`} className="w-12 h-12 bg-white flex justify-center items-center text-gull drop-shadow-xl">
                        <BsIcons.BsEyeFill />
                        </Link>
                    </div>
                </div>
                    <div className="">2</div>
                </div>
              );
                })}
                </div>
            </div>
        </section>

    </div>
  )
}
