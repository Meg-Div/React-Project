import React from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../state/Hooks'
import { FrontPageImage } from '../FrontPageImage'
import { NavBar } from '../NavBar'
import { PicksContent } from '../PicksContent'
import { Picks } from './Picks'

export const HomePage = () => {
  const artSearch = useAppSelector(s => s.art.artSearch)
  return (
    <>
    <NavBar />
    {artSearch === '' ? <FrontPageImage /> : <PicksContent />}
    </>
  )
}
