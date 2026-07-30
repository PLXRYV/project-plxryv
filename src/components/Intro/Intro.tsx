import React, { useState, useEffect } from 'react';
import styles from './Intro.module.scss';

const Intro = () => {
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    const slideTimeout = setTimeout(() => {
      setIsSlidingUp(true);
    }, 4000);

    const removeTimeout = setTimeout(() => {
      setIsRendered(false);
    }, 5000);

    return () => {
      clearTimeout(slideTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!isRendered) {
    return null;
  }

  return (
    <div className={`${styles.introOverlay} ${isSlidingUp ? styles.slideUp : ''}`}>
      <div className={styles.typewriter}>
        <h1>project PLXRYV</h1>
      </div>
    </div>
  );
};

export default Intro;
