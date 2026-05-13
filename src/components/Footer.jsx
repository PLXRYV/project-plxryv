const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-box-text">
                    <p className="footer-text">Do you want to ask?</p>
                    <p className="footer-description">Contact with me. I'm in touch mon-fri from 8 am to 8 pm (gmt).</p>
                </div>
                <div className="footer-box-link">
                    <a><img className="link-icon" src="/src/assets/icons/icons-github.png" alt="GitHub"></img></a>
                    <a><img className="link-icon" src="/src/assets/icons/icons-telegram.png"></img></a>
                    <a><img className="link-icon" src="/src/assets/icons/icons-instagram.png"></img></a>
                    <a><img className="link-icon" src="/src/assets/icons/icons-email.png"></img></a>
                    <a><img className="link-icon" src="/src/assets/icons/icons-linkedin.png"></img></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer