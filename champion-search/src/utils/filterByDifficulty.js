const filterByDifficulty = (arr, diff) => {
  if (diff === 'Low') {
    return arr.filter((champion) => champion.info.difficulty < 4)
  } else if (diff === 'Moderate') {
    return arr.filter(
      (champion) => champion.info.difficulty < 8 && champion.info.difficulty > 3
    )
  } else if (diff === 'High') {
    return arr.filter((champion) => champion.info.difficulty > 7)
  } else {
    return arr
  }
}

export default filterByDifficulty
