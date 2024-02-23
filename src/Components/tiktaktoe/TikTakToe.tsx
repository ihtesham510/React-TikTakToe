import { useEffect, useState } from 'react'
import { Array, TypeResults } from '@utils/types'
import { checkResults } from '@utils/checkResutls'
import Grid from './Grid'
import Results from './Results'
import Picker from './Picker'

export const TikTakToe: React.FC = () => {
  const [arr, setArr] = useState<Array[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])
  // console.table(arr)
  const [winner, setWinner] = useState<TypeResults>(null)
  const [turn, setTurn] = useState<Array>(null)
  const updateArrayValue = (rowIndex: number, colIndex: number, newValue: Array) => {
    const newArr = [...arr]
    const newRow = [...newArr[rowIndex]]
    newRow[colIndex] = newValue
    newArr[rowIndex] = newRow
    setArr(newArr)
  }
  useEffect(() => {
    setWinner(checkResults(arr))
  }, [arr])
  const handleClickO = () => {
    setTurn('o')
  }
  const handleClickX = () => {
    setTurn('x')
  }
  const handleReset = () => {
    setTurn(null)
    setWinner(null)
    setArr([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ])
  }
  const changeValues = (rowIndex: number, colIndex: number) => {
    updateArrayValue(rowIndex, colIndex, turn)
    setTurn(turn == 'x' ? 'o' : 'x')
  }
  return (
    <div className='flex h-screen items-center justify-center'>
      {winner != null && <Results winner={winner} handleReset={handleReset} />}
      {turn && !winner && <Grid arr={arr} changeValues={changeValues} />}
      {!turn && !winner && <Picker handleClickO={handleClickO} handleClickX={handleClickX} />}
      {/* <Grid arr={arr} changeValues={changeValues} /> */}
    </div>
  )
}
