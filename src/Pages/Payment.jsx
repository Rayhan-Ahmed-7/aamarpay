import React, { useCallback } from 'react';
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
import useUser from '../CustomHook/useUser';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";


const Payment = ({ translate, setTranslate }) => {
    const { id } = useParams();
    const [user] = useUser(id);
    const particlesInit = useCallback(async engine => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);
    return (
        <div className="main">
            <div className='payment'>
                <div className="card_container">
                    <div className="card">
                        <div className="cancel"><ImCancelCircle /></div>
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
                                    style={({ isActive }) => isActive ? { backgroundColor: "#fd7e14" } : { backgroundColor: "#fe9900ab" }}
                                >
                                    {!translate && <p>Cards</p>}
                                    {translate && <p>কার্ডস</p>}
                                </NavLink>
                            </div>
                            <div className="mobileBanking nav_item">
                                <NavLink
                                    to={`/payment/${id}/mobile-banking`}
                                    style={({ isActive }) => isActive ? { backgroundColor: "#fd7e14" } : { backgroundColor: "#fe9900ab" }}
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
                                <span>Pay BDT {user?.amount}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <footer>
                    <img src={logo2} alt="logo" />
                    <p>© Copyright 2022 aamarPay. All Rights Reserved by Rayhan</p>
                </footer>
            </div>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "#000000",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        // onClick: {
                        //     enable: true,
                        //     mode: "push",
                        // },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />

        </div>
    );
};

export default Payment;