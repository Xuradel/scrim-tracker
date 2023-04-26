const Features = () => {
    return (
        <div className="features-container">
            <div className="features-container1">
                <div className="features-text">
                    <h1 className="features-h">In depth tracking</h1>
                    <p className="features-p">Track every second of data and collect everything in no time</p>
                </div>
                <div className="features-image">
                    <img src={require("../images/test.webp")} alt="logo" className="features-image"></img>
                </div>
            </div>
            <div className="features-container2">
                <div className="features-text">
                    <h1 className="features-h">Analyze everything you need</h1>
                    <p className="features-p">Record drafts, game data and post game analysis</p>
                </div>
                <div className="features-image">
                    <img src={require("../images/test.webp")} alt="logo" className="features-image"></img>
                </div>
            </div>
            <div className="features-container3">
                <div className="features-text">
                    <h1 className="features-h">Receive data effortlesly</h1>
                    <p className="features-p">Your data will be collected and presented in a easy to visualize manner</p>
                </div>
                <div className="features-image">
                    <img src={require("../images/test.webp")} alt="logo" className="features-image"></img>
                </div>
            </div>
        </div>

    )
}


export default Features;