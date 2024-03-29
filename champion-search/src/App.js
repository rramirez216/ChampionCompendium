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
    'https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json'
  )
  let championArray
  if (championListResponse) {
    championArray = getValuesFromResponse(championListResponse)
      .map((champ) => {
        if (champ.id === 'MonkeyKing') {
          champ.id = 'Wukong'
        }
        return champ
      })
      .sort((a, b) => a.id.localeCompare(b.id))
  }

  const championData = useFetch(
    `https://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion/${currentChampion}.json`
  )
  let championDataResponse
  if (championData) {
    championDataResponse = championData[currentChampion]
    console.log(championData[currentChampion])
  }
  const handleSearch = (e) => setSearch(e)

  return (
    <>
      <Routes>
        <Route
          path='/'
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
