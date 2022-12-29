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
            <img src={bkash} alt="bkash" />
            <img src={roket} alt="roket" />
            <img src={nagad} alt="nagad" />
            <img src={wallet} alt="ok wallet" />
            <img src={upay} alt="upay" />
            <img src={tap} alt="tap" />
        </div>
    );
};

export default MobileBanking;