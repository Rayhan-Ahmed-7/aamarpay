import React from 'react';
import { useParams } from 'react-router-dom';
import useUser from '../CustomHook/useUser';
import './details.css'
const Details = ({translate}) => {
    const {id} = useParams();
    const [user] = useUser(id);
    return (
        <div className='info'>
            {!translate && <h2>Transaction Details</h2>}
            {translate && <h2>লেনদেনের বিস্তারিত</h2>}
            <div className="detail">
                <strong>Invoice To:</strong>
                <p>{user?.name}</p>
            </div>
            <div className="detail">
                <strong>Transation ID:</strong>
                <p>{user?.inVoiceId}</p>
            </div>
            <div className="detail">
                <strong>Amount:</strong>
                <p>BDT {user?.amount}</p>
            </div>
            <div className="detail">
                <strong>Gateway Fee:</strong>
                <p>BDT 0.00</p>
            </div>
            <div className="detail">
                <strong>Total Payable Amount:</strong>
                <p>BDT {user?.amount}</p>
            </div>
        </div>
    );
};

export default Details;