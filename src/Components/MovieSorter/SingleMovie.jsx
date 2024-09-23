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
    className={` w-1/2 rounded-md  flex justify-between items-center p-2 my-2 cursor-pointer font-semibold text-white ease-in-out ${isCorrect==null? 'bg-black/40' : isCorrect==true? '!bg-green-600/80': '!bg-red-600/50'} `} 
    ref={setNodeRef} 
    {...attributes} 
    {...listeners}
    style={style} 
    >
        <img 
        src={link} className='w-32 aspect-3/4 rounded-md my-2 object-cover'
        ></img>
        <div className='flex justify-center items-center w-full px-3'>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default SingleMovie