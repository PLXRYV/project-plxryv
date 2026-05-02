import React, { useState, useEffect } from 'react';

const Intro = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Длительность должна совпадать с временем анимации текста + небольшая пауза
    // Например: 3.5s (печать) + 1s (пауза) = 4500ms
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 4500);

    return () => clearTimeout(timeout);
  }, []);

  // Если анимация закончилась, и компонент "уехал" (через CSS transition), 
  // его можно полностью удалить из DOM через пару секунд после setIsVisible(false)
  if (!isVisible) {
    return null; // Или добавьте логику задержки удаления
  }

  return (
    <div className={`intro-overlay ${!isVisible ? 'slide-up' : ''}`}>
      <div className="typewriter">
        <h1>project PLXRYV</h1>
      </div>
    </div>
  );
};

export default Intro;
