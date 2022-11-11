import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import getValuesFromResponse from './utils/getValuesFromResponse'
import useFetch from './hooks/useFetch'
import Home from './pages/Home'
import Champion from './pages/Champion'
import GlobalStyles from './components/GlobalStyles'

function App() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState('')
  const [tag, setTag] = useState('All')
  const [difficulty, setDifficulty] = useState('All Difficulties')

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
              handleSearch={handleSearch}
              search={search}
              selected={selected}
              setSelected={setSelected}
              setSearch={setSearch}
              tag={tag}
              setTag={setTag}
              difficulty={difficulty}
              setDifficulty={setDifficulty}
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
