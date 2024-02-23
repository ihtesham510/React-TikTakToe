import React, { MouseEventHandler } from 'react'

type Props = {
  handleClickX: MouseEventHandler
  handleClickO: MouseEventHandler
}
const Picker: React.FC<Props> = ({ handleClickX, handleClickO }) => {
  return (
    <div className='flex flex-col items-center justify-center  gap-10'>
      <h1 className='text-6xl font-extrabold'>Pick Your Sign</h1>
      <div className='flex gap-5'>
        <button className='h-20 w-40 rounded-md bg-indigo-500 text-4xl  text-black' onClick={handleClickX}>
          X
        </button>
        <button className='h-20 w-40 rounded-md bg-indigo-500 text-4xl  text-black' onClick={handleClickO}>
          O
        </button>
      </div>
    </div>
  )
}

export default Picker
