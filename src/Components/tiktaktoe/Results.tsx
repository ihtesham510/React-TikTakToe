import { TypeResults } from '@utils/types'
import { MouseEventHandler } from 'react'

type Props = {
  winner: TypeResults
  handleReset: MouseEventHandler
}
const Results: React.FC<Props> = ({ winner, handleReset }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      {winner != 'Draw' && winner && (
        <div className='flex items-center justify-center text-center text-4xl'>
          <h1>Winner is &nbsp;</h1>
          <p className='text-5xl font-bold'>{winner}</p>
        </div>
      )}
      {winner == 'Draw' && <h1 className='text-5xl font-bold'>Draw !!!</h1>}
      <button className='rounded-md bg-indigo-500 p-4 text-2xl text-black' onClick={handleReset}>
        Restart Game
      </button>
    </div>
  )
}

export default Results
