import React, {useState, useEffect} from 'react'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import { closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core'
import { movies } from '../../assets/movies'
import SwapList from './SwapList'

const MainMovieSort = () => {
    const [movieList, setMovieList]=useState(movies)
  const [isCorrect, setIsCorrect]=useState(false)
  
  const shuffleMovieList=(movie)=>{
    let shuffledArr=[]
    let usedIndex=[]
    let i=0
    
    while(i<movie.length)
    {
      let randomIdx=Math.floor(Math.random()*movie.length);
      if(!usedIndex.includes(randomIdx))
      {
        shuffledArr.push(movie[randomIdx])
        usedIndex.push(randomIdx);
        i++;
      }
    }
    setMovieList(shuffledArr)
  }
  const getMovieIdx= id => movieList.findIndex(movie=> movie.id== id)

  const handleDragEnd= e =>{
    const {active, over}= e
    if(active.id == over.id)
      return;

    setMovieList(movie=>{
      const initial= getMovieIdx(active.id)
      const newPosition = getMovieIdx(over.id)
      return arrayMove(movie, initial, newPosition)
    })
  }

  const sensors= useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  useEffect(()=>{
    shuffleMovieList(movieList)
  },[])

  const handleClick=(e)=>{
    e.preventDefault();
    let flag=0;
    setIsCorrect(false)
    for (let i=0; i< movieList.length - 1; i++)
    {
      if(movieList[i].id < movieList[i+1].id)
        flag=1;
      else
        flag=0
    }
    if(flag==0)
    {
      setIsCorrect(false)
      alert("Incorrect List Order! Try Again")
    }
    else if(flag==1)
    {
      setIsCorrect(true)
      alert("GGs! Your List is Correct!")
    }
  } 
  const handleReset=(e)=>{
    e.preventDefault()
    setIsCorrect(false)
    shuffleMovieList(movieList)
  }

  return (
    <div className='w-full flex justify-center items-center'>
        <DndContext sensors={sensors} collisionDetection={closestCorners} onDragEnd={handleDragEnd} >
            <SwapList movies={movieList} handleClick={handleClick} isCorrect={isCorrect} handleReset={handleReset}/>
        </DndContext>
      </div>
  )
}

export default MainMovieSort