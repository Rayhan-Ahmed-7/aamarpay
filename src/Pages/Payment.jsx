import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import { BsHandIndex } from 'react-icons/bs';
import logo from '../assets/aamarpay_logo.png';
import support from '../assets/Vector.png';
import faq from '../assets/help.png';
import trans from '../assets/help.png';
import './Payment.css';
import { useState } from 'react';
const Payment = () => {
    const [translate, setTranslate] = useState(false);
    return (
        <div className="main">
            <div className="particle"></div>
            <div className='payment'>
                <div className="card_container">
                    <div className="card">
                        <div className="logo">
                            <div className="circle" style={{ backgroundImage: `url(${logo})` }}></div>
                        </div>
                        <div className="title"><h3>aamar pay</h3></div>
                        <div className="infoNav">
                            <div className="support nav_item">
                                <Link to='/payment' title='Support'>
                                    <div className="icon">
                                        <img src={support} alt="" />
                                    </div>
                                    {!translate && <p>Support</p>}
                                    {translate && <p>সাপোর্ট</p>}
                                </Link>
                            </div>
                            <div className="faq nav_item">
                                <Link to='/payment/faq' title='FAQ'>
                                    <div className="icon">
                                        <img src={faq} alt="faq" />
                                    </div>
                                    {!translate && <p>FAQ</p>}
                                    {translate && <p>তথ্যাদি</p>}
                                </Link>
                            </div>
                            <div className="translate nav_item">
                                <Link to="#" title='translate' onClick={() => setTranslate(!translate)}>
                                    <div className="icon">
                                        <img src={trans} alt="" />
                                    </div>
                                    {!translate && <p>Translate</p>}
                                    {translate && <p>অনুবাদ</p>}
                                </Link>
                            </div>
                            <div className="details nav_item">
                                <Link to='/payment/details' title='Details'>
                                    <div className="icon">
                                        {<FaInfoCircle style={{ "width": "20px", "height": "20px", "marginBottom": "5px" }} />}
                                    </div>
                                    {!translate && <p>Details</p>}
                                    {translate && <p>বিস্তারিত</p>}
                                </Link>
                            </div>
                        </div>
                        <div className="paymentNav">
                            <div className="cards nav_item">
                                <NavLink
                                    to='/payment/cards'
                                    style={({ isActive }) => isActive ? {backgroundColor:"#fd7e14"}:{backgroundColor:"#fe9900ab"}}
                                >
                                    {!translate && <p>Cards</p>}
                                    {translate && <p>কার্ডস</p>}
                                </NavLink>
                            </div>
                            <div className="mobileBanking nav_item">
                                <NavLink 
                                to='/payment/mobile-banking'
                                style={({ isActive }) => isActive ? {backgroundColor:"#fd7e14"}:{backgroundColor:"#fe9900ab"}}
                                >
                                    {!translate && <p>Mobile Banking</p>}
                                    {translate && <p>মোবাইল ব্যাংকিং</p>}
                                </NavLink>
                            </div>
                        </div>
                        <div className="outlet">
                            <Outlet />
                        </div>
                        <div className="pay">
                            <button className="payBtn">
                                <BsHandIndex />
                                <span>Pay BDT 10.00</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;