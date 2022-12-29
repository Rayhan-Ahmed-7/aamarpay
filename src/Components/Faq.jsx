import React from 'react';
import { useState } from 'react';
import './faq.css';

const Faq = ({ translate }) => {
    const [expand,setExpand] = useState(0);
    
    return (
        <div className='faqs'>
            <div className="faq-item" onClick={()=>setExpand(expand != 1 ? 1:0)}>
                <button className="qus" >
                    {!translate && <p>Is my transaction safe over online?</p>}
                    {translate && <p>আমার অনলাইন লেনদেন কি নিরাপদ আমার পে'র সাথে ?</p>}
                </button>
                <div className={`expandable-content ${expand == 1 ? "block":"hidden"}`}>
                    {!translate && <p>Yes ! aamarPay does not store your card information and transmit it securely so that your safety can be ensured with highest security and compliance.</p>}
                    {translate && <p>"হ্যাঁ ! আমর পে আপনার কার্ডের তথ্য সংরক্ষণ করে না এবং সর্বোচ্চ সুরক্ষা নিশ্চিত করে আপনার প্রদেয় তথ্য ব্যাঙ্ক এর সহিত যোগাযোগের সময় প্রেরিত হয়ে থাকে।"</p>}
                </div>
            </div>
            <div className="faq-item" onClick={()=>setExpand(expand !=2 ? 2:0)}>
                <button className="qus" >
                    {!translate && <p>Is Debit & Credit Card Allowed over aamarPay ?</p>}
                    {translate && <p>আমার পে কি ডেবিট এবং ক্রেডিট কার্ড গ্রহণ করে?</p>}
                </button>
                <div className={`expandable-content ${expand == 2 ? "block":"hidden"}`}>
                    {!translate && <p>Yes ! aamarPay ensures both Debit & Credit card with Visa & MasterCard logo. If you have a card, please make sure that it is usable over online through your bank. International cards can be transacted only if it is issued by any bank. No virtual card or prepaid card will be allowed to avoid fraudulent activities.</p>}
                    {translate && <p>"হ্যাঁ ! আমর পে ভিসা এবং মাস্টারকার্ড, এমেক্স, ইউনিয়ন পে লোগো প্রদর্শিত অনলাইন এনাবল্ড ডেবিট এবং ক্রেডিট কার্ড উভয়ই গ্রহণ করে থাকে। আপনার উপরে উল্লিখিত কার্ড যদি থেকে থাকে তবে দয়া করে নিশ্চিত হয়ে নিন যে এটি আপনার ব্যাংকের মাধ্যমে অনলাইনে পেমেন্ট প্রদাণে ব্যবহারযোগ্য। কোনও কার্ড ব্যাংক কর্তৃক ইস্যু করা হলেই আন্তর্জাতিক কার্ডগুলি লেনদেন করা যায়। প্রতারণামুলক কর্মাকান্ড প্রতিরোধকল কোন প্রকার ভার্চুয়াল কার্ড বা প্রিপেইড কার্ড এর মাধ্যমে আমার পে তে লেনদেন করা যাবে না বলে আন্তরিক ভাবে দুঃখিত।"</p>}
                </div>
            </div>
            <div className="faq-item" onClick={()=>setExpand(expand !=3 ? 3:0)}>
                <button className="qus" >
                    {!translate && <p>I'm doing first transaction over online! Could you please help !</p>}
                    {translate && <p>আমি অনলাইনে প্রথম লেনদেন করছি ! আপনাদের সহযোগিতা কি পাওয়া যাবে এই ক্ষেত্রে?</p>}
                </button>
                <div className={`expandable-content ${expand == 3 ? "block":"hidden"}`}>
                    {!translate && <p>It’s easy, just go to your vendors website and follow the process mentioned below: <br/>Add to cart {'>'} checkout {'>'} select shipping method {'>'} select payment by aamarPay {'>'} select the option you prefer {'>'} input the required fields and You are DONE !</p>}
                    {translate && <p>এটি সহজ, কেবল আপনার বিক্রেতার ওয়েবসাইটে ভিজিট করুন এবং নীচে উল্লিখিত প্রক্রিয়াটি অনুসরণ করুন: <br/> পছন্দের পণ্য বা সেবা কার্টে যোগ করুন {'>'} চেকআউট {'>'} শিপিং পদ্ধতিটি (যদি ডিজিটাল পণ্য হয় তবে এটি প্রযোজ্য নয়) নির্বাচন করুন {'>'} আমারপে দ্বারা অর্থপ্রদান নির্বাচন করুন {'>'} আপনার পছন্দের পেমেন্ট অপশনটি নির্বাচন করুন {'>'} প্রয়োজনীয় তথ্য ব্যাংকের অংশে ওটিপি প্রদানের মাধ্যমে পুরণ করুন {'>'} আপনার লেনদেন সফল্ভাবে সম্পন্ন হয়েছে। লেনদেনে কোন প্রকার সমস্যার সম্মুখীন হলে আমাদের মার্চেন্ট সাপোর্টে অথবা আপনার বিক্রেতার সাথে যথাযথ প্রমাণাদি সহিত যোগাযোগের অনুরোধ রইলো। <br/> আরো বিস্তারিত জানতে ভিজিট করুনঃ <a href="https://sandbox.aamarpay.com/www.aamarpay.com" target="_blank" rel="noopener noreferrer" style={{color:'blue'}}>www.aamarpay.com</a></p>}
                </div>
            </div>
        </div>
    );
};

export default Faq;