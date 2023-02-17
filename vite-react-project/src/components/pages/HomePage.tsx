import React from 'react'
import { Link } from 'react-router-dom'
import { FrontPageImage } from '../FrontPageImage'
import { NavBar } from '../NavBar'

export const HomePage = () => {
  return (
    <>
    <NavBar />
    <FrontPageImage />
    </>
  )
}
