const MyPortfolio = () => {
    return (
        <div className="myportfolio-container">
            <h1><span>My</span>Portfolio</h1>
            <div className="myportfolio-item">
                <img className="portfolio-item-image" src="/src/assets/portfolio-images/createx.png
                " alt="CreateX"></img>
                <div className="myportfolio-description">
                    <h2 className="portfolio-item-date">March 2026</h2>
                    <a className="portfolio-item-link">CreateX</a>
                    <p className="portfolio-item-description">Multi-page website, based on code with integration of several technologies:
                        Vite; React; CustomHooks; JavaScript; SCSS; HTML; Node.JS.
                    </p>
                    <img className="item-icon" src="/src/assets/icons/icons-html.png" alt="HTML"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-css.png" alt="CSS"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-sass.png" alt="SASS"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-javascript.png" alt="JavaScript"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-react.png" alt="React"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-vite.png" alt="Vite"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-node-js.png" alt="Node.JS"></img>
                </div>
            </div>
            <div className="myportfolio-item">
                <img className="portfolio-item-image" src="/src/assets/portfolio-images/todo-list.png" alt="ToDo-List"></img>
                <div className="myportfolio-description">
                    <h2 className="portfolio-item-date">February 2026</h2>
                    <a className="portfolio-item-link">ToDo-List</a>
                    <p className="portfolio-item-description">Simple ToDo-List application, where you can add, delete and edit your tasks. I created this project to practice my skills in JavaScript and React. I used at this project custom hooks, which I created myself, to make the code more organized and reusable.
                    </p>
                    <img className="item-icon" src="/src/assets/icons/icons-html.png" alt="HTML"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-sass.png" alt="SASS"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-react.png" alt="JavaScript"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-node-js.png" alt="Node.JS"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-vite.png" alt="Vite"></img>
                </div>
            </div>
            <div className="myportfolio-item">
                <img className="portfolio-item-image" src="/src/assets/portfolio-images/danceStudio.png" alt="Dance Studio"></img>
                <div className="myportfolio-description">
                    <h2 className="portfolio-item-date">December 2025</h2>
                    <a className="portfolio-item-link">Dance Studio Rakurs</a>
                    <p className="portfolio-item-description">Landing-page website, where I completely created the page, from design to launch on the host.
                    </p>
                    <img className="item-icon" src="/src/assets/icons/icons-html.png" alt="HTML"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-css.png" alt="CSS"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-javascript.png" alt="JavaScript"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-node-js.png" alt="Node.JS"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-vite.png" alt="Vite"></img>
                </div>
            </div>
            <div className="myportfolio-item">
                <img className="portfolio-item-image" src="/src/assets/portfolio-images/spoon.png" alt="Spoon"></img>
                <div className="myportfolio-description">
                    <h2 className="portfolio-item-date">October 2025</h2>
                    <a className="portfolio-item-link">Spoon Landing</a>
                    <p className="portfolio-item-description">Landing-page website, where I completely created the page, from design to launch on the host.
                    </p>
                    <img className="item-icon" src="/src/assets/icons/icons-html.png" alt="HTML"></img>
                    <img className="item-icon" src="/src/assets/icons/icons-css.png" alt="CSS"></img>
                </div>
            </div>
            
        </div>
        
    )
}
export default MyPortfolio;