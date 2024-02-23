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
        <div className='flex items-center justify-center text-center text-2xl md:text-4xl'>
          <h1>Winner is &nbsp;</h1>
          <p className='font-bold'>{winner}</p>
        </div>
      )}
      {winner == 'Draw' && <h1 className=' text-2xl font-bold md:text-5xl'>Draw !!!</h1>}
      <button className='rounded-md bg-indigo-500 p-2 text-xl text-black md:p-4 md:text-2xl' onClick={handleReset}>
        Restart Game
      </button>
    </div>
  )
}

export default Results
