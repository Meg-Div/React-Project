import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from './SidebarData'
import { IconContext } from 'react-icons'

export const NavBar = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color: "#234e59"}}>
      <div className="shadow-md w-full fixed top-0 left-0">
        <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        </div>  
        <nav className={sidebar ? "md:flex bg-white py-4" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index)=> {
              return (
                <li key={index} className={item.classN}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        </IconContext.Provider>
    </>
  )
}
