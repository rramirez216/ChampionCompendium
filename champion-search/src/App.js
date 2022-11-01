import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import getValuesFromResponse from './utils/getValuesFromResponse'
import useFetch from './hooks/useFetch'
import Home from './pages/Home'
import Champion from './pages/Champion'
import GlobalStyles from './components/GlobalStyles'

function App() {
  const [search, setSearch] = useState('')
  const [filtered, setFiltered] = useState(null)

  let championListResponse = useFetch(
    'http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json'
  )
  let championArray
  if (championListResponse) {
    championArray = getValuesFromResponse(championListResponse)
  }

  // const championData = useFetch(
  //   'http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion/Aatrox.json'
  // )

  const handleSearch = (e) => setSearch(e)

  return (
    <>
      <Routes>
        <Route
          path='/champions'
          element={
            <Home
              championArray={championArray}
              setSearch={setSearch}
              handleSearch={handleSearch}
              search={search}
            />
          }
        />
        <Route path='/' element={<Navigate to='/champions' />} />
        <Route path='/champions/Aatrox' element={<Champion />} />
      </Routes>
      <GlobalStyles />
    </>
  )
}

export default App
