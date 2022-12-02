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
  const [currentChampion, setCurrentChampion] = useState('Udyr')

  let championListResponse = useFetch(
    'http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json'
  )
  let championArray
  if (championListResponse) {
    championArray = getValuesFromResponse(championListResponse)
  }

  const championData = useFetch(
    `http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion/${currentChampion}.json`
  )
  let championDataResponse
  if (championData) {
    championDataResponse = championData[currentChampion]
  }
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
              setCurrentChampion={setCurrentChampion}
            />
          }
        />
        <Route path='/' element={<Navigate to='/champions' />} />
        <Route
          path={`/champions/${currentChampion}`}
          element={
            <Champion
              currentChampion={currentChampion}
              championData={championDataResponse}
            />
          }
        />
      </Routes>
      <GlobalStyles />
    </>
  )
}

export default App
