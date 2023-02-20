import React from 'react'
import { useAppSelector, useAppDispatch } from '../../state/Hooks'


export const Product = () => {
    const dispatch = useAppDispatch();
    const imageData = useAppSelector((state) => state.art.imageData)

  return (
    <div>
    <div className="border border-[#9abda9] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
        {/*image*/}
            <div className='w-[200px] mx-auto flex justify-center items-center'>

            <img className='max' src="{image}" alt="" />
            </div>
        </div>
    </div>
        <div className="border">2</div>
    </div>
  )
}
