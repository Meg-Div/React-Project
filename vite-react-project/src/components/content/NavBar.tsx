import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData } from '../data/SidebarData'
import { useAppDispatch, useAppSelector } from '../../state/Hooks'
import { setArt } from '../../state/ArtSlice'
import { setOpen } from '../../state/ArtSlice'

export const NavBar = () => {
  const dispatch = useAppDispatch();

  const open = useAppSelector((state) => state.art.open)
  const artSearch = useAppSelector((state) => state.art.artSearch)


  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-6 px-7">
        <div className='font-bold text-2xl cursor-point flex items-center text-gray-800'>

          <form action="" className="relative w-max mx-auto" >

            <input type="search" name="search" autoComplete="off" id="search" className='  relative peer z-10 bg-transparent w-12 h-12 rounded-full border curser-pointer outline-none pl-12 focus:w-2/3 focus:border-gull focus:cursor-text focus:pl-16 focus:pr-4' onChange={(e) => dispatch(setArt(e.target.value))} value={artSearch}/>

            <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 px-3 stroke-gull  border-r border-transparent peer-focus:stroke-gull" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor">
              
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />

            </svg>
    
          </form>

        </div>
        <div onClick={()=> dispatch(setOpen(!open))} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            {open ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
        </div>

        <ul className={open ? 'md:flex md:items-center md:pb-0 pb-12 md:static bg-white md:z-auto z-[8] left-0 w-full md:w-auto  md:pl-0 pl-9 transition-all duration-500 ease-in top-20 opacity-100 md:opacity-100' : 'md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[8] left-0 w-full md:w-auto  md:pl-0 pl-9 transition-all duration-500 ease-in top-[-490px]'}>
        {SidebarData.map((item, index)=> {
              return (
                <li key={index} className="md:ml-8 text-xl md:my-0 my-7">
                <Link to={item.path} className="text-gull hover:text-summer duration-500">
                  <span className="inline-block content-center gap-2"> 
                  {open ? item.title : item.icon} </span>
                </Link>
              </li>
              )
            })}
            </ul>
      </div>

    </div>
  )
}
