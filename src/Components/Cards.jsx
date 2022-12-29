import React from 'react';
import nexus from '../assets/dbbl_nexus.png';
import master from '../assets/dbbl_master.png';
import visa from '../assets/dbbl_visadebit.png';
import qcash from '../assets/qcash.png';
import './cards.css';
const Cards = () => {
    return (
        <div className='allCards'>
            <img src={nexus} alt="nexus" />
            <img src={master} alt="master" />
            <img src={visa} alt="visa" />
            <img src={qcash} alt="qcash" />
        </div>
    );
};

export default Cards;