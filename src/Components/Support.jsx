import React from 'react';
import msg from "../assets/messenger.png";
import mail from "../assets/maillogo.png";
const Support = ({translate}) => {
    return (
        <div className='supports'>
            <div className="support_text">
            {!translate && <p>We are here to help you with any information and problems through our merchant center</p>}
            {translate && <p>আমাদের যোগাযোগ কেন্দ্রের মাধ্যমে যেকোন তথ্য এবং সমস্যা নিয়ে আপনাকে সহায়তা</p>}
            </div>
            <a href='https://web.facebook.com/aamarpay' className="msg" target="_blank">
                <img src={msg} alt="messanger icon" />
                {!translate && <p>Click here for messenger live chat</p>}
                {translate && <p>মেসেঞ্জার লাইভ চ্যাটের জন্য এখানে ক্লিক করুন</p>}
            </a>
            <a href='mailto:support@aamarpay.com' className="msg" target="_blank">
                <img src={mail} alt="mail icon" />
                {!translate && <p>Click here to email us for support</p>}
                {translate && <p>আমাদের সাপোর্টে ইমেইল করতে এখানে ক্লিক করুন</p>}
            </a>
        </div>
    );
};

export default Support;