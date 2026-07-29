import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerBoxText}>
                    <p className={styles.footerText}>Do you want to ask?</p>
                    <p className={styles.footerDescription}>
                        Contact with me. I'm in touch mon-fri from 8 am to 8 pm (gmt).
                    </p>
                </div>
                <div className={styles.footerBoxLink}>
                    <a href="https://github.com" target="_blank" rel="noreferrer">
                        <img className={styles.linkIcon} src="/src/assets/icons/icons-github.png" alt="GitHub" />
                    </a>
                    <a href="#telegram">
                        <img className={styles.linkIcon} src="/src/assets/icons/icons-telegram.png" alt="Telegram" />
                    </a>
                    <a href="#instagram">
                        <img className={styles.linkIcon} src="/src/assets/icons/icons-instagram.png" alt="Instagram" />
                    </a>
                    <a href="#email">
                        <img className={styles.linkIcon} src="/src/assets/icons/icons-email.png" alt="Email" />
                    </a>
                    <a href="#linkedin">
                        <img className={styles.linkIcon} src="/src/assets/icons/icons-linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
