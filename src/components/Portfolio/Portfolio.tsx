import React from 'react';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
    return (
        <div className={styles.myportfolioContainer}>
            <h1><span>My</span> Portfolio</h1>
            
            <div className={styles.myportfolioItem}>
                <img className={styles.portfolioItemImage} src="/src/assets/portfolio-images/createx.png" alt="CreateX" />
                <div className={styles.myportfolioDescription}>
                    <h2 className={styles.portfolioItemDate}>March 2026</h2>
                    <a href="#createx" className={styles.portfolioItemLink}>CreateX</a>
                    <p className={styles.portfolioItemDescription}>
                        Multi-page website, based on code with integration of several technologies:
                        Vite; React; CustomHooks; JavaScript; SCSS; HTML; Node.JS.
                    </p>
                    <div className={styles.techIcons}>
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-html.png" alt="HTML" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-css.png" alt="CSS" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-sass.png" alt="SASS" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-javascript.png" alt="JavaScript" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-react.png" alt="React" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-vite.png" alt="Vite" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-node-js.png" alt="Node.JS" />
                    </div>
                </div>
            </div>

            <div className={styles.myportfolioItem}>
                <img className={styles.portfolioItemImage} src="/src/assets/portfolio-images/todo-list.png" alt="ToDo-List" />
                <div className={styles.myportfolioDescription}>
                    <h2 className={styles.portfolioItemDate}>February 2026</h2>
                    <a href="#todo" className={styles.portfolioItemLink}>ToDo-List</a>
                    <p className={styles.portfolioItemDescription}>
                        Simple ToDo-List application, where you can add, delete and edit your tasks. I created this project to practice my skills in JavaScript and React. I used at this project custom hooks, which I created myself, to make the code more organized and reusable.
                    </p>
                    <div className={styles.techIcons}>
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-html.png" alt="HTML" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-sass.png" alt="SASS" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-react.png" alt="React" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-node-js.png" alt="Node.JS" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-vite.png" alt="Vite" />
                    </div>
                </div>
            </div>

            <div className={styles.myportfolioItem}>
                <img className={styles.portfolioItemImage} src="/src/assets/portfolio-images/danceStudio.png" alt="Dance Studio" />
                <div className={styles.myportfolioDescription}>
                    <h2 className={styles.portfolioItemDate}>December 2025</h2>
                    <a href="#dance" className={styles.portfolioItemLink}>Dance Studio Rakurs</a>
                    <p className={styles.portfolioItemDescription}>
                        Landing-page website, where I completely created the page, from design to launch on the host.
                    </p>
                    <div className={styles.techIcons}>
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-html.png" alt="HTML" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-css.png" alt="CSS" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-javascript.png" alt="JavaScript" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-node-js.png" alt="Node.JS" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-vite.png" alt="Vite" />
                    </div>
                </div>
            </div>

            <div className={styles.myportfolioItem}>
                <img className={styles.portfolioItemImage} src="/src/assets/portfolio-images/spoon.png" alt="Spoon" />
                <div className={styles.myportfolioDescription}>
                    <h2 className={styles.portfolioItemDate}>October 2025</h2>
                    <a href="#spoon" className={styles.portfolioItemLink}>Spoon Landing</a>
                    <p className={styles.portfolioItemDescription}>
                        Landing-page website, where I completely created the page, from design to launch on the host.
                    </p>
                    <div className={styles.techIcons}>
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-html.png" alt="HTML" />
                        <img className={styles.itemIcon} src="/src/assets/icons/icons-css.png" alt="CSS" />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Portfolio;
