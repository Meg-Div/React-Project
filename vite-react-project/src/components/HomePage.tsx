import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from './NavBar'

export const HomePage = () => {
  return (
    <Link to={"/"}>
    <div>
        <NavBar />
        HomePage</div>
        <h1>hello</h1>
    </Link>
    //codew
  )
}
