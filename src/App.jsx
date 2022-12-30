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
  const [translate, setTranslate] = useState(false);
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/payment/:id/' element={<Payment translate={translate} setTranslate={setTranslate}/>}>
            <Route index path="" element={<Support translate={translate} />}/>
            <Route index path="faq" element={<Faq translate={translate} />}/>
            <Route index path="details" element={<Details translate={translate} />}/>
            <Route index path="cards" element={<Cards/>}/>
            <Route index path="mobile-banking" element={<MobileBanking/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
