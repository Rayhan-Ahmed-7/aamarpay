import React, { useContext, useState } from 'react';
import nexus from '../assets/dbbl_nexus.png';
import master from '../assets/dbbl_master.png';
import visa from '../assets/dbbl_visadebit.png';
import qcash from '../assets/qcash.png';
import './cards.css';
import CardForm from './card/CardForm';
import { translateContext } from '../App';
import NumberVerify from './NumberVerify/NumberVerify';
const Cards = () => {
    const translate = useContext(translateContext);
    const [seeOthers, setSeeOthers] = useState(false)
    return (
        <>
            {/* <p className='other_cards' onClick={()=>setSeeOthers(!seeOthers)}>{translate ? 'অন্য কার্ড সমূহ':'see other cards'}</p>
            {
                seeOthers ?
                    <div className='allCards'>
                        <div className='img-container'><img src={nexus} alt="nexus" /></div>
                        <div className='img-container'><img src={master} alt="master" /></div>
                        <div className='img-container'><img src={visa} alt="visa" /></div>
                        <div className='img-container'><img src={qcash} alt="qcash" /></div>
                    </div>
                    :
                    <CardForm />
            } */}
            <NumberVerify/>
        </>
    );
};

export default Cards;