import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Champion from './pages/Champion'
import GlobalStyles from './components/GlobalStyles'
import useFetch from './hooks/useFetch'
function App() {
  const result = useFetch(
    'http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json'
  )
  if (result) console.log(result)
  return (
    <div>
      <Routes>
        <Route path='/champions' element={<Home list={result} />} />
        <Route path='/' element={<Navigate to='/champions' />} />
        <Route path='/champions/Aatrox' element={<Champion />} />
      </Routes>
      <GlobalStyles />
    </div>
  )
}

export default App
