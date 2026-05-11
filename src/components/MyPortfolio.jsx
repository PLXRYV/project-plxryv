const MyPortfolio = () => {
    return (
        <div className="myportfolio-container">
            <h1><span>My</span>Portfolio</h1>
            <div className="myportfolio-item">
                <img className="portfolio-item-image" src="/src/assets/portfolio-images/createx.png
                " alt="CreateX"></img>
                <div className="myportfolio-description">
                    <h2 className="portfolio-item-date">September 2025</h2>
                    <a className="portfolio-item-link">CreateX</a>
                    <p className="portfolio-item-description">Multi-page website, based on code with integration of several technologies:
                        Vite; React; CustomHooks; JavaScript; SCSS; HTML; Node.JS.
                    </p>
                </div>
            </div>
            <div className="myportfolio-item">
                <img className="portfolio-item-image" src="/src/assets/portfolio-images/danceStudio.png" alt="Dance Studio"></img>
                <div className="myportfolio-description">
                    <h2 className="portfolio-item-date">March 2026</h2>
                    <a className="portfolio-item-link">Dance Studio Rakurs</a>
                    <p className="portfolio-item-description">Landing-page website, where I completely created the page, from design to launch on the host.
                    </p>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                    <img></img>
                </div>
            </div>
        </div>
        
    )
}

export default MyPortfolio;