import React from 'react'
import './App.css'
import MainMovieSort from './Components/MovieSorter/MainMovieSort'
import bg3 from './assets/bg3.png'


export default function App() {
  const backgroundStyle = {
    backgroundImage: `url(${bg3})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat:'repeat-y',
    height: '100%',
    width: '100%',
  };

  return (
    <div className="min-h-screen w-full text-3xl font-boldrelative" style={backgroundStyle}>
      <MainMovieSort/>
    </div>
  )
}
/*
<ArcReactorLoader/>
*/