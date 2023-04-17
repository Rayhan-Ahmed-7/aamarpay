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
import axios from 'axios';
export const translateContext = createContext(false);
const sandboxUrl = 'https://sandbox.aamarpay.com/index.php';

function App() {
  const [translate, setTranslate] = useState(false);
  let uploadAbleData = new FormData();

  const request = async () => {
    const data = {
      cus_name: "rayhan",
      cus_email: "r@gmail.com",
      cus_phone: "01767766789",
      amount: 10,
      store_id: "aamarpaytest",
      tran_id: Math.floor(Math.random() * 10000),
      success_url: "example.com",
      fail_url: "example.com",
      cancel_url: "example.com",
      currency: "BDT",
      signature_key: "dbb74894e82415a2f7ff0ec3a97e4183",
      desc: "Description",
      cus_add1: "Dhaka",
      cus_add2: "Dhaka",
      cus_city: "Dhaka",
      cus_state: "Dhaka",
      cus_postcode: "0",
      cus_country: "Bangladesh",
      type: "json"
    }
    for (const x in data) {
      uploadAbleData.append(x, data[x]);
    }
    try {
      const response = await axios.post(sandboxUrl, uploadAbleData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        mode:'no-cors'
      });
      const data = await response.data;
      console.log(data)
    } catch (error) {
      console.log(error);
    } finally {

    }
  }
  request();
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
