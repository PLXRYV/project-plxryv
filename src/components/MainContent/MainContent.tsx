import { useState, useEffect } from 'react';
import LottiePackage from "lottie-react";
import animationData from "/src/assets/animations/Programming.json";
import styles from './Main.module.scss';

const Lottie = (LottiePackage as any).default || LottiePackage;

interface TypingTextProps {
  text: string;
  speed?: number;
}

const TypingText = ({ text, speed = 100 }: TypingTextProps) => {
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

const MainContent = () => {
  return (
    <div className={styles.animationMain}>
      <div className={styles.mainText}>
        <h1><span>Hello!</span> My name is Yaroslav Vorobiev</h1>
        <h1>I am a <TypingText text="Frontend Developer" speed={150} /></h1>
        <h1>I can do some great things with your website</h1>
      </div>

      {typeof Lottie === 'function' || typeof Lottie === 'object' ? (
        <Lottie animationData={animationData} loop={true} />
      ) : (
        <p>Ошибка инициализации компонента Lottie</p>
      )}
    </div>
  );
};

export default MainContent;
