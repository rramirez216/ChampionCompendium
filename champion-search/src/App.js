import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyles from './components/GlobalStyles'
import useFetch from './hooks/useFetch'
function App() {
  const result = useFetch(
    'http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json'
  )
  if (result) console.log(result)
  return (
    <div>
      <div>Choose your champion</div>
      <div>champions listed here</div>
      <GlobalStyles />
    </div>
  )
}

export default App
