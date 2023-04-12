import React, { useEffect, useState, useContext } from 'react';
import cvc from '../../assets/cvc_hover.svg';
import masterCard from '../../assets/card/Master-Card.png';
import americanExpress from '../../assets/card/American-Express.png';
import unionpay from '../../assets/card/unionpay.png';
import visa from '../../assets/card/visa.png';
import dinersclub from '../../assets/card/dinersclub.png';
import question from '../../assets/question-mark.svg';
import aamarpay from '../../assets/aamarpay_logo.png';
import './style.css';
import { translateContext } from '../../App';

const cards = {
  masterCard,
  americanExpress,
  unionpay,
  visa,
  dinersclub
}

// let masterRegex = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
// let americanRegex = /^3[47][0-9]{13}$/
// let unionpayRegex = /^(62[0-9]{14,17})$/;
// let visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
// let dinersclubRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/

// month and day


const CreditCardForm = () => {
  const translate = useContext(translateContext);
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [currentCard, setCurrentCard] = useState();
  const [qusOpen, setQusOpen] = useState(false);

  function formatAmexCardNumber(cardNumber) {
    const pattern = /^(\d{1,4})(\d{1,6})?(\d{1,5})?$/;
    const groups = cardNumber.match(pattern);

    if (groups) {
      return [groups[1], groups[2], groups[3]]
        .filter(Boolean)
        .join(' ');
    } else {
      return cardNumber;
    }
  }
  function formatDinersClubCardNumber(cardNumber) {
    const pattern = /^(\d{1,4})(\d{1,6})?(\d{1,4})?$/;
    const groups = cardNumber.match(pattern);

    if (groups) {
      return [groups[1], groups[2], groups[3]]
        .filter(Boolean)
        .join(' ');
    } else {
      return cardNumber;
    }
  }

  const handleCardNumber = (number) => {

    let cardNumber = number.replace(/\s/g, "");
    if (isNaN(cardNumber)) {
      return;
    }

    if (number.length > 19) {
      return;
    }

    if (/^4/.test(cardNumber)) {
      setCurrentCard(cards.visa);
      formateNumber(cardNumber);

    } else if (/^5[1-5]/.test(cardNumber)) {
      setCurrentCard(cards.masterCard);
      formateNumber(cardNumber);

    } else if (/^3[47]/.test(cardNumber)) {
      if (number.length > 17) {
        return;
      }
      setCurrentCard(cards.americanExpress);
      setCardNumber(formatAmexCardNumber(cardNumber));

    } else if (/^62/.test(cardNumber)) {
      setCurrentCard(cards.unionpay);
      formateNumber(cardNumber);

    } else if (/^30/.test(cardNumber)) {
      if (number.length > 16) {
        return;
      }
      setCurrentCard(cards.dinersclub);
      setCardNumber(formatDinersClubCardNumber(cardNumber));
    } else {
      formateNumber(cardNumber);
      setCurrentCard('');
    }

    function formateNumber(number) {
      let formattedcardNumber = "";
      for (let i = 0; i < number.length; i++) {
        if (i > 0 && i % 4 == 0) {
          formattedcardNumber += " ";
        }
        formattedcardNumber += number[i];
      }
      setCardNumber(formattedcardNumber);
    }
  }
  const handleCardDate = (inputValue) => {

    // Remove any non-digit characters
    inputValue = inputValue.replace(/\D/g, "");
    // Format input as MM/YY

    const firstDigit = inputValue.charAt(0);
    const secondDigit = inputValue.charAt(1);

    if (firstDigit >= "2" && firstDigit <= 9) {
      setExpirationDate('0' + firstDigit + '/');
    } else if (firstDigit == '1' && inputValue <= "12" && inputValue.length < 3) {
      setExpirationDate(inputValue);
    } else if (secondDigit > '2') {
      setExpirationDate('12/');
    } else if (inputValue.length > 2) {
      setExpirationDate(`${inputValue.slice(0, 2)}/${inputValue.slice(2, 4)}`);
    } else {
      if (inputValue.slice(0, 2) <= 12) setExpirationDate(inputValue)
    }

  }

  return (
    <div className="app-container">
      <div className="checkout">
        <div className="checkout-container">
          <div className="input">
            {/* <label>Card Number</label> */}
            <div className="input-field">
              <input
                onFocus={(e) => e.target.parentElement.style.border = "1px solid #354efd"}
                onBlur={(e) => e.target.parentElement.style.border = '1px solid #aaaaaa'}
                onChange={(e) => handleCardNumber(e.target.value)}
                type="tel" name="card_number"
                value={cardNumber}
                placeholder={translate ? 'কার্ড নাম্বার প্রবেশ করুন' : 'Enter Card Number'} />
              {currentCard && <img src={currentCard} />}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="input">
                {/* <label>Expiration Date</label> */}
                <div className="input-field">
                  <input
                    onFocus={(e) => e.target.parentElement.style.border = "1px solid #354efd"}
                    onBlur={(e) => e.target.parentElement.style.border = '1px solid #aaaaaa'}
                    type="tel"
                    name="exp_date"
                    placeholder={translate ? 'মাস / বছর' : 'MM/YY'}
                    onChange={(e) => handleCardDate(e.target.value)}
                    value={expirationDate} maxLength={5} />
                </div>
              </div>
            </div>
            <div className="col">
              <div className="input">
                {/* <label>CVC/CVV</label> */}
                <div className="input-field">
                  <input
                    onFocus={(e) => e.target.parentElement.style.border = "1px solid #354efd"}
                    onBlur={(e) => e.target.parentElement.style.border = '1px solid #aaaaaa'}
                    type="tel"
                    name="cvc"
                    placeholder={translate ? 'সিভিসি/সিভিভি' : 'CVC/CVV'}
                  />
                  <img src={cvc} />
                </div>
              </div>
            </div>
          </div>
          <div className="input">
            {/* <label>{props.label}</label> */}
            <div className="input-field">
              <input
                onFocus={(e) => e.target.parentElement.style.border = "1px solid #354efd"}
                onBlur={(e) => e.target.parentElement.style.border = '1px solid #aaaaaa'}
                type={"text"} name={'name'} placeholder={translate ? "কার্ড বাহকের নাম" : "Card Holder Name"} />
            </div>
          </div>
        </div>
      </div>
      <div className="save_card">
        <div className="top">
          <label className='checkbox'>
            <input type="checkbox" />
            <span>
              {
                translate ?
                  'সংরক্ষণ করুন ও মনে রাখুন'
                  :
                  "Save card & remember me"
              }
            </span>
          </label>
          <div className='right'>
            <span className='remember_icon'>
              <div onClick={() => setQusOpen(!qusOpen)} className="iconsvg">
                <div className="separate_line"></div>
                <img src={question} alt="" width={'20px'} />
              </div>
            </span>
            {
              qusOpen && <div className="popup_content">
                We use 
                <img src={aamarpay} alt="" />
                 to securely store your payment info for quick checkout on this site and others.
                <a href="link to more info">More info</a>
              </div>
            }
          </div>
        </div>
        <p className='terms_condition'>
          {translate ? 'এই টিকবক্সে ক্লিক করার মাধ্যমে আপনি আমাদের' : 'By checking this box you agree to our '}
          <a href="#">{translate ? ' পরিষেবার শর্তাদির ':'Terms of Service '}</a>
          {translate ? 'প্রতি সম্মতি জানাচ্ছেন যা আপনার দেয়া এই পেমেন্ট' : 'which is limited to facilitating your  payment to '}
          <b> easy.com.bd</b>
          <span>{translate ? ' কে পাঠানোর মাঝে সীমাবদ্ধ।':'.'}</span>
        </p>
      </div>
    </div>
  )
}

export default CreditCardForm;

const Button = (props) => (
  <button className="checkout-btn" type="button">{props.text}</button>
);


