import React from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import { BsHandIndex } from 'react-icons/bs';
import { ImCancelCircle } from 'react-icons/im';
import logo from '../assets/aamarpay_logo.png';
import logo2 from '../assets/aamarpay_logo_w.png';
import support from '../assets/Vector.png';
import faq from '../assets/help.png';
import trans from '../assets/help.png';
import './Payment.css';
import { useState } from 'react';
import useUser from '../CustomHook/useUser';
const Payment = ({translate,setTranslate}) => {
    const {id} = useParams();
    const [user] = useUser(id);
    return (
        <div className="main">
            <div className='payment'>
                <div className="card_container">
                    <div className="card">
                        <div className="cancel"><ImCancelCircle/></div>
                        <div className="logo">
                            <div className="circle" style={{ backgroundImage: `url(${logo})` }}></div>
                        </div>
                        <div className="title"><h3>aamarPay</h3></div>
                        <div className="infoNav">
                            <div className="support nav_item">
                                <Link to={`/payment/${id}`} title='Support'>
                                    <div className="icon">
                                        <img src={support} alt="" />
                                    </div>
                                    {!translate && <p>Support</p>}
                                    {translate && <p>সাপোর্ট</p>}
                                </Link>
                            </div>
                            <div className="faq nav_item">
                                <Link to={`/payment/${id}/faq`} title='FAQ'>
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
                                <Link to={`/payment/${id}/details`} title='Details'>
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
                                    to={`/payment/${id}/cards`}
                                    style={({ isActive }) => isActive ? {backgroundColor:"#fd7e14"}:{backgroundColor:"#fe9900ab"}}
                                >
                                    {!translate && <p>Cards</p>}
                                    {translate && <p>কার্ডস</p>}
                                </NavLink>
                            </div>
                            <div className="mobileBanking nav_item">
                                <NavLink 
                                to={`/payment/${id}/mobile-banking`}
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
                                <span>Pay BDT {user.amount}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <footer>
                    <img src={logo2} alt="logo" />
                    <p>© Copyright 2022 aamarPay. All Rights Reserved by Rayhan</p>
                </footer>
            </div>
            <div className="particle"></div>
        </div>
    );
};

export default Payment;