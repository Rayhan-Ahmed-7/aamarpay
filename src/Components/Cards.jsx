import React from 'react';
import nexus from '../assets/dbbl_nexus.png';
import master from '../assets/dbbl_master.png';
import visa from '../assets/dbbl_visadebit.png';
import qcash from '../assets/qcash.png';
import './cards.css';
const Cards = () => {
    return (
        <div className='allCards'>
            <div className='img-container'><img src={nexus} alt="nexus" /></div>
            <div className='img-container'><img src={master} alt="master" /></div>
            <div className='img-container'><img src={visa} alt="visa" /></div>
            <div className='img-container'><img src={qcash} alt="qcash" /></div>
        </div>
    );
};

export default Cards;