import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'

export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className='font-bold text-2xl cursor-point flex items-center text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
            <FaIcons.FaPaintRoller/>
          </span>
          Designer
        </div>

        <div onClick={()=> setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            {open ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </div>

        <ul className={open ? 'md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto  md:pl-0 pl-9 transition-all duration-500 ease-in top-20 opacity-100 md:opacity-100' : 'md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto  md:pl-0 pl-9 transition-all duration-500 ease-in top-[-490px]'}>
        {SidebarData.map((item, index)=> {
              return (
                <li key={index} className="md:ml-8 text-xl md:my-0 my-7">
                <Link to={item.path} className="text-green-500 hover:text-blue-800 duration-500">
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
              )
            })}
            </ul>
      </div>

    </div>
  )
}
