const Footer = () => {
    return (
        <div class="footer">
            <div class="contain">
                <div class="col">
                    <img src={require("../images/logo.png")} className="footer-logo"></img>
                </div>
                <div class="col">
                    <h1>Company</h1>
                    <ul>
                        <li>About</li>
                        <li>Mission</li>
                        <li>Services</li>
                    </ul>
                </div>
                <div class="col">
                    <h1>Products</h1>
                    <ul>
                        <li>Scrim Tracker</li>
                        <li>Database</li>
                        <li>Coaching</li>
                    </ul>
                </div>
                <div class="col">
                    <h1>Resources</h1>
                    <ul>
                        <li>Guide</li>
                        <li>Discord</li>
                        <li>Demo</li>
                    </ul>
                </div>
                <div class="col">
                    <h1>Support</h1>
                    <ul>
                        <li>Contact us</li>
                        <li>Web chat</li>
                        <li>Open ticket</li>
                    </ul>
                </div>
                <div class="col social">
                    <h1>Social</h1>
                    <ul>
                        <li>Contact us</li>
                        <li>Web chat</li>
                        <li>Open ticket</li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
        </div>
    )
}

export default Footer;