import { createContext, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './Components/Cards';
import Details from './Components/Details';
import Faq from './Components/Faq';
import Intro from './Components/Intro/Intro';
import MobileBanking from './Components/MobileBanking';
import Support from './Components/Support';
import Form from './Pages/Form';
import Payment from './Pages/Payment';
export const translateContext = createContext(false);
function App() {
  const [translate, setTranslate] = useState(false);
  return (
    <div className="App">
      <translateContext.Provider value={translate}>
        {/* <Intro/> */}
        <Routes>
          {/* <Route path='/' element={<Form />} /> */}
          <Route path='/' element={<Navigate to='/payment/no-money/cards' />} />
          <Route path='/payment/:id/' element={<Payment translate={translate} setTranslate={setTranslate} />}>
            <Route index path="" element={<Support translate={translate} />} />
            <Route index path="faq" element={<Faq translate={translate} />} />
            <Route index path="details" element={<Details translate={translate} />} />
            <Route index path="cards" element={<Cards />} />
            <Route index path="mobile-banking" element={<MobileBanking />} />
          </Route>
        </Routes>
      </translateContext.Provider>
    </div>
  )
}

export default App
