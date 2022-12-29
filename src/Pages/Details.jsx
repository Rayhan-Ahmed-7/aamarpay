import React from 'react';

const Details = () => {
    const handleSubmit = async (e)=>{
        e.preventDefault();
    }
    return (
        <div className='form'>
            <form action="" method="post" onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br/>
                <input type="text" name="name" id="name" required/><br/>
                <label htmlFor="email">Email:</label><br/>
                <input type="email" name="email" id="email" required/><br/>
                <label htmlFor="number">Phone Number:</label><br/>
                <input type="number" name="number" id="number" required/><br/>
                <label htmlFor="amount">Amount:</label><br/>
                <input type="number" name="amount" id="amount" required/><br/>
                <input className='submitBtn' type="submit" value="Pay"/>
            </form>
        </div>
    );
};

export default Details;