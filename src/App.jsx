import React from 'react'
import './App.css'
import MainMovieSort from './Components/MovieSorter/MainMovieSort'



export default function App() {
  const bgStyle={
    backgroundImage:"url('https://i.pinimg.com/736x/d3/bf/ed/d3bfed4cf605d6ff2daa72bf162636c4.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    width: '100%',
  }

  return (
    <div className="min-h-scree w-full text-3xl font-bold p-20" style={bgStyle}>
      <MainMovieSort/>
    </div>
  )
}
/*
<ArcReactorLoader/>
*/