const Champion = ({ currentChampion, championData }) => {
  // let { currentChampion: champion } = championData
  return (
    <div>
      {/* {championData ? championData.lore : 'empty'} */}
      {championData.lore}
      <br />
      {championData.name}
    </div>
  )
}

export default Champion
