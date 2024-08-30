import { SearchIcon } from 'lucide-react'
import React from 'react'

function SearchSection({onSearchInput}:any) {
  return (
    <div className='p-10 bg-gradient-to-br from-blue-500 via-blue-700 to-blue-300
    flex justify-center items-center text-white flex-col
    '>
      <h2 className='text-3xl font-bold'>
        Be creative with Contenticier
        </h2>
      <p>Let AI generate your content !</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center bg-white
        my-5 w-[50%]
        p-2 border rounded'>
            <SearchIcon className='text-primary'/>
            <input 
            type="text" 
            onChange={(event)=>onSearchInput(event.target.value)}
         placeholder='Search content services ?'
         className='bg-transparent 
         w-full outline-none text-black'
         />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
