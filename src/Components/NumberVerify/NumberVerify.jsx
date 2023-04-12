import React from 'react';
import flag from '../../assets/bd_flag.svg';
import './style.css';
const NumberVerify = () => {
    return (
        <div className='verify_container'>
            <div className='wellcome_title'>
                <p>Welcome back,</p>
                <h5>MD RAYHAN</h5>
            </div>
            <p className='tag_line'>You are already registered in out system, so please verify your <strong>mobile number</strong></p>
            <div className='input_container'>
                <div className='flex items-center input_field'>
                    <input type="text" />
                    <img src={flag} alt="" />
                </div>
                <button>Verify</button>
            </div>
            <div className='actions'>
                <p>Change Number</p>
                <p>Skip This Step</p>
            </div>
        </div>
    );
};

export default NumberVerify;