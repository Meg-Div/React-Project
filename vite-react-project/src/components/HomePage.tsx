import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from './NavBar'

export const HomePage = () => {
  return (
    <Link to={"/"}>
    <div>
        <NavBar />
        HomePage</div>
    </Link>
  )
}
