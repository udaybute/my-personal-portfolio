import React from 'react';
import { motion } from 'motion/react';
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profileub.png";
import TypingAnimator from 'react-typing-animator';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    }
});

const textArray = [
    'React', 'Java', 'Node.js', 'Express', 'MongoDB', 'SQL', 'HTML', 'CSS',
    'JavaScript', 'Git', 'TypeScript', 'REST APIs', 'GraphQL', 'Jest', 'Spring Boot', 
    'Docker', 'AWS', 'Redux', 'Agile', 'CI/CD'
];

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-center">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>
                            Uday Bute
                        </motion.h1>

                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent'>
                            Full Stack Developer
                        </motion.span>

                        <TypingAnimator
                            textArray={textArray}
                            cursorColor="#333"
                            textColor="#CFE7FA"
                            fontSize="16px"
                            loop
                            typingSpeed={80} // Reduced typing speed to make it more readable
                            delaySpeed={500} // Shorter delay between words
                            backspace
                            height="60px"
                            dynamicDelay={false} // Turn off dynamic delay to avoid potential glitches
                            style={{ fontFamily: "Helvetica", marginTop: "10px" }}
                        />

                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center border border-gray-400 rounded-full bg-slate-800">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            src={profilePic} alt="UdayBute" width={350}
                            className='border rounded-full border-neutral-900'
                            style={{ boxShadow: 'rgb(224,255,255) 0px 5px 15px' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
