const changeDifficultyFromNumberToWord = (difficultyNumber) => {
  if (difficultyNumber < 4) {
    return 'Low'
  } else if (difficultyNumber < 8 && difficultyNumber > 3) {
    return 'Moderate'
  } else {
    return 'High'
  }
}

export default changeDifficultyFromNumberToWord
