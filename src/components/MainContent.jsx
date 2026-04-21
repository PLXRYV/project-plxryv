import { useState, useEffect } from 'react'
import LottiePackage from "lottie-react";
import animationData from "../assets/animations/programming.json";

const Lottie = LottiePackage.default || LottiePackage;


const TypingText = ({ text, speed = 100 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + text[index]);
            setIndex(index + 1);
        }, speed);
            return () => clearTimeout(timeout);
        }
    }, [index, text, speed]);

        return <span>{displayedText}</span>;
    };

// Использование:


const MainContent = () => {
    return (
    <div className="animationMain">
        <div className='mainText'>
            <h1><span>Hello!</span>My name is Yaroslav Vorobiev</h1>
                <p>I am a Frontend Developer</p>
            <p>I can do some great things with your website</p>
        </div>

        {typeof Lottie === 'function' || typeof Lottie === 'object' ? (
            <Lottie animationData={animationData} loop={true} />)
                : ( <p>Ошибка загрузки Lottie</p>)}
    </div>
    );
};

export default MainContent;
