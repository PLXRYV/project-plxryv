const Header = () => {
    return (
    <div className="header">
        <img src="./src/assets/logo.svg" alt="Logo" className="logo"/>
        <nav>
            <ul className="nav-list">
                <li className="nav-item"><a>About</a></li>
                <li className="nav-item"><a>Portfolio</a></li>
                <li className="nav-item"><a>Work Experiance</a></li>
                <li className="nav-item"><a>Contacts</a></li>
            </ul>
        </nav>
        <button className="theme-btn">#</button>
    </div>    
)
}

export default Header