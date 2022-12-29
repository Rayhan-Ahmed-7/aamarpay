import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Details from './Pages/Details'
import Payment from './Pages/Payment'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Details/>}/>
        <Route path='/payment/:id' element={<Payment/>}/>
      </Routes>
    </div>
  )
}

export default App
