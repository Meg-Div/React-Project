import React from 'react'
import { useAppSelector } from '../../state/Hooks'
import { FrontPageImage } from '../content/FrontPageImage'
import { SearchContent } from '../content/SearchContent'
import { NavBar } from '../content/NavBar'



export const Home = () => {
  const artSearch = useAppSelector(s => s.art.artSearch)
  return (
    <>
    <NavBar />
    {artSearch === '' ? <FrontPageImage /> : <SearchContent />}
    </>
  )
}
