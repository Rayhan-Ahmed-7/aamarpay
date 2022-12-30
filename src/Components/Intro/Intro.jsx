import React from 'react';
import { motion } from 'framer-motion';
import './intro.css';
const Intro = () => {
    let text = 'Aamar Pay';
    const container = {
        inActive: {},
        active: {
            transition: {
                type:"spring",
                staggerChildren: .04,
                when:"afterChildren",
                duration:1.5,
                delay:.5
            },
            y:-50,
        },
    }
    const item = {
        inActive: { y: "200px" },
        active: { 
            y: 0 ,
            transition:{
                ease:"anticipate",
                duration:1,
            }
        },
    }
    return (
        <motion.div animate={{display:"none"}} transition={{delay:3}} className='intro_container'>
            <motion.div animate={{y:"-100%"}} transition={{delay:2,duration:.7}} className="intro">
                <div className='cut'>
                <motion.div initial="inActive" animate="active" variants={container}>
                    {
                        text.split('').map((l,i)=>(
                            <motion.span variants={item} key={i}>{l}</motion.span>
                        ))
                    }
                </motion.div>
                </div>
            </motion.div>-
            <motion.div animate={{y:"-210%"}} transition={{delay:2,duration:.8}} className="color"></motion.div>
            <motion.div animate={{y:"-310%"}} transition={{delay:2,duration:.8}} className="color2"></motion.div>
        </motion.div>
    );
};

export default Intro;