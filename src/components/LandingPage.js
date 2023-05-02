const LandingPage = () => {
    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };
    return (
        <main className="main-container">
            <div className="main-section">
                <div className="main-text">
                    <h1 className="main-h">
                        BE PREPARED LIKE A WORLD CHAMPION
                    </h1>
                    <p className="main-p">
                        We bring the best data collection technology for your scrims. <br />
                        Easy to use, visualize and take the advantage.
                    </p>

                    <div className="main-buttons">
                        <a href="#featuresPage" className='nav-link' onClick={handleClick("features")}><button className="start-button"> Get Started
                            <svg viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" fill-rule="evenodd"></path>
                            </svg>
                        </button></a>
                        <a href="#FAQpage" className='nav-link' onClick={handleClick("faq")}>                        <button className="start-button">
                            Learn more
                        </button></a>


                    </div>
                </div>
            </div>
            <div className="main-image-zone">
                <img src={require("../images/hero-image.png")} alt="logo" className="main-image"></img>
            </div>

        </main>
    )
}

export default LandingPage;