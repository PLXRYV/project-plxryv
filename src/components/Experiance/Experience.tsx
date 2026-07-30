import React from 'react';
import styles from './Experience.module.scss';

const Experience = () => {
    return (
        <section className={styles.experience}>
            <div className={styles.workExperience}>
                <h1><span>Work</span> Experience</h1>
                <ul className={styles.experienceList}>
                    <li className={styles.experienceItem}>
                        <p className={styles.experienceDates}>March 2024 - February 2026</p>
                        <h3 className={styles.experienceTitle}>"Vector" Web-studio</h3>
                        <h3 className={styles.experiencePosition}>Frontend Developer</h3>
                        <p className={styles.experienceDescription}>
                            Development of the frontend part of projects in the field of e-commerce and web-studio. 
                            Development in JavaScript in the OOP style. Creating simple React components. 
                            Creating responsive and user-friendly interfaces.
                        </p>
                        <div className={styles.experienceTechnologies}>
                            <img className={styles.itemIcon} src="/src/assets/icons/icons-html.png" alt="HTML" />
                            <img className={styles.itemIcon} src="/src/assets/icons/icons-css.png" alt="CSS" />
                            <img className={styles.itemIcon} src="/src/assets/icons/icons-sass.png" alt="SASS" />
                            <img className={styles.itemIcon} src="/src/assets/icons/icons-tailwind.png" alt="Tailwind" />
                            <img className={styles.itemIcon} src="/src/assets/icons/icons-javascript.png" alt="JavaScript" />
                            <img className={styles.itemIcon} src="/src/assets/icons/icons-react.png" alt="React" />
                            <img className={styles.itemIcon} src="/src/assets/icons/icons-vite.png" alt="Vite" />
                            <img className={styles.itemIcon} src="/src/assets/icons/icons-node-js.png" alt="Node.JS" />
                            <img className={styles.itemIcon} src="/src/assets/icons/icons-github.png" alt="Git" />
                            <img className={styles.itemIcon} src="/src/assets/icons/icons-figma.png" alt="Figma" />
                        </div>
                    </li>
                </ul>    
            </div>
        </section>
    );
};

export default Experience; // Экспортируем с правильным именем
