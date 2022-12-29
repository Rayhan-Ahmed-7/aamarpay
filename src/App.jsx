import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Cards from './Components/Cards'
import Details from './Components/Details'
import Faq from './Components/Faq'
import MobileBanking from './Components/MobileBanking'
import Support from './Components/Support'
import Form from './Pages/Form'
import Payment from './Pages/Payment'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/payment/' element={<Payment />}>
            <Route index path="" element={<Support/>}/>
            <Route index path="faq" element={<Faq/>}/>
            <Route index path="details" element={<Details/>}/>
            <Route index path="card" element={<Cards/>}/>
            <Route index path="mobile-banking" element={<MobileBanking/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
