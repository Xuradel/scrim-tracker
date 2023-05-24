const Footer = () => {
    return (
        <div class="footer">
            <div className="footer-logo-section">
                <img src={require("../images/logo.png")} className="footer-logo"></img>
            </div>
            <div className="footer-text-section">
                © All rights reserved by League Scrim Tracker. League Scrim Tracker isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends. League of Legends™ and Riot Games are trademarks or registered trademarks of Riot Games, Inc.
            </div>
        </div>
    )
}

export default Footer;