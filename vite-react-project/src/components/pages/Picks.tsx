import React from 'react'
import { NavBar } from '../content/NavBar'
import { PicksContent } from '../content/PicksContent'
import { SearchContent } from '../content/SearchContent'
import { useAppSelector } from '../../state/Hooks'



export const Picks = () => {
  const artSearch = useAppSelector(s => s.art.artSearch)
  
  return (
    <>
    <NavBar />
    {artSearch === '' ? <PicksContent /> : <SearchContent />}
    </>
  )
}
