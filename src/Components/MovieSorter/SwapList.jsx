import React, {useState } from 'react'
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import SingleMovie from './SingleMovie'


const SwapList = ({movies, handleClick, handleReset, isCorrect}) => {


  return (
    <>
        <div className='flex flex-col justify-center items-center w-full'>
            <SortableContext items={movies} strategy={verticalListSortingStrategy}>
                {
                    movies.map((movie)=>(
                        <SingleMovie id={movie.id} link={movie.link} name={movie.name} key={movie.id} isCorrect={isCorrect}/>
                    ))
                }
            </SortableContext>
            <div className='w-1/2 flex justify-between items-center'>
                <button className='bg-green-500 w-2/5 my-3 px-1 py-2 rounded-md' onClick={handleClick}>SUBMIT </button>
                <button className=' bg-red-700 w-2/5 my-3 px-1 py-2 rounded-md' onClick={handleReset}>RESET </button>
            </div>
        </div>
    </>
  )
}

export default SwapList