import React from 'react';
import './details.css'
const Details = ({translate}) => {
    return (
        <div className='info'>
            {!translate && <h2>Transaction Details</h2>}
            {translate && <h2>লেনদেনের বিস্তারিত</h2>}
            <div className="detail">
                <strong>Invoice To:</strong>
                <p>Mr.ABC</p>
            </div>
            <div className="detail">
                <strong>Transation ID:</strong>
                <p>AAM163464656466</p>
            </div>
            <div className="detail">
                <strong>Amount:</strong>
                <p>BDT 10.00</p>
            </div>
            <div className="detail">
                <strong>Gateway Fee:</strong>
                <p>BDT 0.00</p>
            </div>
            <div className="detail">
                <strong>Total Payable Amount:</strong>
                <p>BDT 10.00</p>
            </div>
        </div>
    );
};

export default Details;