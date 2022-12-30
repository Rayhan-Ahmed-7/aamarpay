import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useUser = (id) => {
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        (async ()=>{
            try{
                setLoading(true);
                let res = await fetch('https://aamarpay.onrender.com/user/'+id);
                let result = await res.json();
                setUser(result[0]);
                setLoading(false);
            }catch(err){
                console.log(err);
                setLoading(false);
            }
        })();
    },[id]);
    return [user,loading];
};

export default useUser;