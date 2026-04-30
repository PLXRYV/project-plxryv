
const Portfolio = () => {
    return (
        <div className="portfolioSkills">
            <div className="firstList">
            <h1 className="namePortfolioList">My hard skills</h1>
                <ul className="nameList">
                    <li className="skillItem">
                        <p className="skillName">HTML(HTML5),JSX</p>
                    </li>
                    <li className="skillItem">
                        <p className="skillName">CSS (CSS3), SASS,
                            Tailwind, Animations</p>
                    </li>
                    <li className="skillItem">
                        <p className="skillName">Javascript (ES6+, OOP)</p>
                    </li>
                    <li className="skillItem">
                        <p className="skillName">React(Redux Toolkit)</p>
                    </li>
                    <li className="skillItem">
                        <p className="skillName">Webpack, Vite</p>
                    </li>
                    <li className="skillItem">
                        <p className="skillName">Rest API, Websockets</p>
                    </li>
                    <li className="skillItem">
                        <p className="skillName">BEM, Feature-Sliced 
                            Design, Accessibility, UX</p>
                    </li>
                    <li className="skillItem">
                        <p className="skillName">Git(Github)</p>
                    </li>
                </ul>
            </div>
            <div className="firstList">
                <h1 className="namePortfolioList">My soft skills</h1>
                <ul className="nameList">
                    <li className="skillItem">
                        <p className="skillName">I know what it means 
                            to work in a team
                        </p>
                    </li>
                    <li className="skillItem">
                        <p className="skillName">I am responsible 
                            about deadlines
                        </p>
                    </li>
                    <li className="skillItem">
                        <p className="skillName">I am attentive to 
                            the details of the terms of reference
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Portfolio