import React from 'react'
import {useSortable} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const SingleMovie = ({id, link, name, isCorrect}) => {
    const {attributes, listeners, setNodeRef, transform , transition} = useSortable({id})

    const style={
        transform: CSS.Transform.toString(transform),
        transition
    }
  return (
    <div 
    className={` w-4/5 rounded-md ${isCorrect?' bg-green-400':'bg-red-700'} flex justify-between items-center p-2 my-2 cursor-pointer`} 
    ref={setNodeRef} 
    {...attributes} 
    {...listeners}
    style={style} 
    >
        <img 
        src={link} className='w-28 aspect-3/4 rounded-md my-2 object-cover'
        ></img>
        <div className='flex justify-center items-center w-full px-3'>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default SingleMovie