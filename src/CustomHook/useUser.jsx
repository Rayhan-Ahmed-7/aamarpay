import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useUser = (id) => {
    const [user,setUser] = useState({});
    useEffect(()=>{
        (async ()=>{
            try{
                let res = await fetch('https://aamarpay.onrender.com/user/'+id);
                let result = await res.json();
                setUser(result[0]);
            }catch(err){
                console.log(err);
            }
        })();
    },[id]);
    return [user]
};

export default useUser;