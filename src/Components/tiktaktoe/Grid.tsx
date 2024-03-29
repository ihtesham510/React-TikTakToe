import { Array } from '@utils/types'
import React from 'react'
type Props = {
  arr: Array[][]
  changeValues: (i: number, j: number) => void
}
const Grid: React.FC<Props> = ({ arr, changeValues }) => {
  return (
    <div className='flex flex-col gap-y-1 rounded-md bg-indigo-500'>
      {arr.map((array, arrayIndex) => (
        <div key={arrayIndex} className='flex gap-1'>
          {array.map((item, itemIndex) => (
            <button
              key={itemIndex}
              onClick={() => changeValues(arrayIndex, itemIndex)}
              disabled={item ? true : false}
              className='text-bold h-24 w-24 bg-gray-800 text-3xl text-white md:h-40 md:w-40 md:text-6xl'
            >
              {item}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}
export default Grid
