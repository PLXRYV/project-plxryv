import React from 'react';
import styles from './Header.module.scss';



const Header = () => {
    return (
        <div className={styles.header}>
            <img src="/src/assets/icons/logo.svg" alt="Logo" className={styles.logo} />
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="#about">About</a></li>
                    <li className={styles.navItem}><a href="#portfolio">Portfolio</a></li>
                    <li className={styles.navItem}><a href="#experience">Work Experience</a></li>
                    <li className={styles.navItem}><a href="#contacts">Contacts</a></li>
                </ul>
            </nav>
            <button className={styles.themeBtn}>Change Theme</button>
        </div>    
    );
};

export default Header;
