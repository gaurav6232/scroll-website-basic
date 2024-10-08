import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
 
 

const App = () => {
  return (
    <div className='w-full h-screen bg-red-400'>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
     <Navbar/>
     <Home/>
    </div>
  )
}

export default App
