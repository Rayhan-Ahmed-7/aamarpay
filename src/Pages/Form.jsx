import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Loading from '../Components/Loading/Loading';
import './form.css';
const Form = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const user = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.number.value,
            amount: e.target.amount.value,
            inVoiceId: "aam" + Math.ceil(Math.random() * 10000000000)
        }
        try {
            let res = await fetch('https://aamarpay.onrender.com/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            let result = await res.json();
            setLoading(false);
            navigate(`/payment/${user.inVoiceId}`);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    }

    const labels = {
        name: "Name",
        email: "Email",
        phone: "Phone Number",
        amount: "Amount"
    }
    return (
        <div className="container">
            <div className='form'>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="input_item">
                        <input type="text" name="name" id="name" autoComplete='off' required />
                        <label htmlFor="name">{
                            labels.name.split('').map((leter, index) => (<span style={{ transitionDelay: index * 50 + "ms" }} key={index}>{leter}</span>))
                        }</label>
                    </div>
                    <div className="input_item">
                        <input type="email" name="email" id="email" autoComplete='off' required />
                        <label htmlFor="email">{
                            labels.email.split('').map((leter, index) => (<span style={{ transitionDelay: index * 50 + "ms" }} key={index}>{leter}</span>))
                        }</label>
                    </div>
                    <div className="input_item">
                        <input type="number" name="number" id="number" autoComplete='off' required />
                        <label htmlFor="number">{
                            labels.phone.split('').map((leter, index) => (<span style={{ transitionDelay: index * 50 + "ms" }} key={index}>{leter}</span>))
                        }</label>
                    </div>
                    <div className="input_item">
                        <input type="number" name="amount" id="amount" autoComplete='off' required />
                        <label htmlFor="amount">{
                            labels.amount.split('').map((leter, index) => (<span style={{ transitionDelay: index * 50 + "ms" }} key={index}>{leter}</span>))
                        }</label>
                    </div>
                    <div className="input_btn_item">
                        <input className='submitBtn' type="submit" value="Pay" />
                    </div>
                </form>
            </div>
            {loading && <Loading />}
        </div>
    );
};

export default Form;