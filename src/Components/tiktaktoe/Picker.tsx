import React, { MouseEventHandler } from 'react'

type Props = {
  handleClickX: MouseEventHandler
  handleClickO: MouseEventHandler
}
const Picker: React.FC<Props> = ({ handleClickX, handleClickO }) => {
  return (
    <div className='flex flex-col items-center justify-center  gap-10'>
      <h1 className='font-excon text-3xl md:text-6xl md:font-extrabold'>Pick Your Sign</h1>
      <div className='flex gap-5'>
        <button
          className='h-10 w-20 rounded-md bg-indigo-500 text-2xl text-black md:h-20 md:w-40  md:text-4xl'
          onClick={handleClickX}
        >
          X
        </button>
        <button
          className='h-10 w-20 rounded-md bg-indigo-500 text-2xl text-black md:h-20 md:w-40  md:text-4xl'
          onClick={handleClickO}
        >
          O
        </button>
      </div>
    </div>
  )
}

export default Picker
