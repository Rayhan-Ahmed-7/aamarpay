import React from 'react';
import {useNavigate} from 'react-router-dom';
import './form.css';
const Details = () => {
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            name:e.target.name.value,
            email:e.target.email.value,
            phone:e.target.number.value,
            amount:e.target.amount.value,
            inVoiceId:"aam"+Math.ceil(Math.random()*10000000000)
        }
        try{
            let res = await fetch('http://localhost:5000/user',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(user)
            });
            let result = await res.json();
            navigate(`/payment/${user.inVoiceId}`);
            console.log(result);
        }catch(err){
            console.log(user);
        }
    }
    return (
        <div className="container">
            <div className='form'>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <div className="input_item">
                        <input type="text" name="name" id="name" required />
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div className="input_item">
                        <input type="email" name="email" id="email" required />
                        <label htmlFor="email">Email:</label>
                    </div>
                    <div className="input_item">
                        <input type="number" name="number" id="number" required />
                        <label htmlFor="number">Phone Number:</label>
                    </div>
                    <div className="input_item">
                        <input type="number" name="amount" id="amount" required />
                        <label htmlFor="amount">Amount:</label>
                    </div>
                    <div className="input_btn_item">
                        <input className='submitBtn' type="submit" value="Pay"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Details;