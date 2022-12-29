import React from 'react';
import bkash from '../assets/bkash.png';
import roket from '../assets/rsz_rocket.png';
import nagad from '../assets/nagad.png';
import wallet from '../assets/okwallet.png';
import upay from '../assets/upay.jpeg';
import tap from '../assets/tap.png';
const MobileBanking = () => {
    
    return (
        <div className='allCards'>
            <div className='img-container'><img src={bkash} alt="bkash" /></div>
            <div className='img-container'><img src={roket} alt="roket" /></div>
            <div className='img-container'><img src={nagad} alt="nagad" /></div>
            <div className='img-container'><img src={wallet} alt="ok wallet" /></div>
            <div className='img-container'><img src={upay} alt="upay" /></div>
            <div className='img-container'><img src={tap} alt="tap" /></div>
        </div>
    );
};

export default MobileBanking;