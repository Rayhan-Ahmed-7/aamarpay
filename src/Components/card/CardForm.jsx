import React, { useState } from 'react';
import cvc from '../../assets/cvc_hover.svg';
import masterCard from '../../assets/card/Master-Card.png';
import americanExpress from '../../assets/card/American-Express.png';
import unionpay from '../../assets/card/unionpay.png';
import visa from '../../assets/card/visa.png';
import dinersclub from '../../assets/card/dinersclub.png';
import './style.css';

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

function formatDate(inputField) {
  const inputValue = inputField.value;
  const digitsOnly = inputValue.replace(/\D/g, ''); // remove all non-digits
  let month = digitsOnly.slice(0, 2);
  let day = digitsOnly.slice(2, 4);

  // make sure month and day are within range
  month = Math.max(1, Math.min(12, parseInt(month)));
  day = Math.max(1, Math.min(31, parseInt(day)));

  const formattedDate = `${month}/${day}`;
  return formattedDate;
}

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [currentCard, setCurrentCard] = useState();

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
      setCurrentCard(cards.dinersclub);
      formateNumber(cardNumber);
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
  const handleCardDate = (date) => {
    setExpirationDate(formatDate(date));
  }
  return (
    <div className="app-container">
      <div className="checkout">
        <div className="checkout-container">
          <div className="input">
            <label>Card Number</label>
            <div className="input-field">
              <input onChange={(e) => handleCardNumber(e.target.value)} type="tel" name="card_number" value={cardNumber} placeholder='Enter Card Number' />
              {currentCard && <img src={currentCard} />}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="input">
                <label>Expiration Date</label>
                <div className="input-field">
                  <input type="tel" name="exp_date" placeholder="MM/YY" onChange={(e) => handleCardDate(e.target.value)} value={expirationDate}/>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="input">
                <label>CVC/CVV</label>
                <div className="input-field">
                  <input type="tel" name="cvc" placeholder="CVC/CVV"/>
                  <img src={cvc} />
                </div>
              </div>
            </div>
          </div>
          <Input label="Cardholder's Name" type="text" name="name" placeholder="Card Holder Name" />
        </div>
      </div>
    </div>
  )
}

export default CreditCardForm;

const Input = (props) => (
  <div className="input">
    <label>{props.label}</label>
    <div className="input-field">
      <input onWheel={(e) => { e.preventDefault() }} type={props.type} name={props.name} placeholder={props.placeholder} />
    </div>
  </div>
);

const Button = (props) => (
  <button className="checkout-btn" type="button">{props.text}</button>
);

