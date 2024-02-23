import { Array, TypeResults } from './types'

export function checkResults(array: Array[][]): TypeResults {
  // horizontal
  for (let i = 0; i < 3; i++) {
    if (array[i][0] == array[i][1] && array[i][1] == array[i][2] && array[i][2] != null) {
      return array[i][0]
    }
  }
  // vertical
  for (let i = 0; i < 3; i++) {
    if (array[0][i] == array[1][i] && array[1][i] == array[2][i] && array[2][i] != null) {
      return array[0][i]
    }
  }
  // diagonal
  const diagonal1 = array[0][0] == array[1][1] && array[1][1] == array[2][2] && array[2][2] != null
  const diagonal2 = array[0][2] == array[1][1] && array[1][1] == array[2][0] && array[2][0] != null
  if (diagonal1) {
    return array[1][1]
  }
  if (diagonal2) {
    return array[1][1]
  }
  const draw =
    array[0][0] &&
    array[0][1] &&
    array[0][2] &&
    array[1][0] &&
    array[1][1] &&
    array[1][2] &&
    array[2][0] &&
    array[2][1] &&
    array[2][2]
  if (draw) {
    return 'Draw'
  }

  return null
}
