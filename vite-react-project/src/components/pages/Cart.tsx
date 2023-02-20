import React from 'react'
import { useAppSelector, useAppDispatch } from '../../state/Hooks'
import * as BsIcons from "react-icons/bs"
import { removeCart } from '../../state/ArtSlice';
import { NavBar } from '../content/NavBar';


export const Cart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.art.cart)

  return (
    <div>
      <NavBar />
      {cart.map((item, index) => {
        
              return (
                <div className="md:w-[20vw]  w-[40vw]">
                    <img className="object-fill" src={item.src}></img>
                  <div className="flex flex-row pb-5 pt-1 justify-between	">
                      <div className="">{item.title}</div>
                      <div className="">{item.price}</div>
                      <button onClick={(e) => dispatch(removeCart(item))}><BsIcons.BsBagDashFill /></button>
                    </div>
                </div>
              );
            })}
    </div>
  )
}
