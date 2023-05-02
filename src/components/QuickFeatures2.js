const QuickFeatures2 = () => {
    return (
        <>
            <div className="features2">
                <div className="features2-text">
                    <h1>Start creating amazing statistics and gain your advantage to fullfill your goals</h1>
                    <p>With our solution you can start inmediatly recording your scrim's data
                        and begin your lead
                    </p>
                    <p>
                        <li>Easy to visualize</li>
                        <li>Leave the hardwork for our app</li>
                        <li>Master your draft's</li>
                        <li>Analyze your scrims</li>
                    </p>
                </div>
                <div className="features2-img-section">
                    <img src={require("../images/coach2.png")} className="features2-img"></img>
                </div>
            </div>
            <div className="features2-2">
                <div className="features2-text">
                    <h1>Find more about the success of our clients</h1>
                    <p>There are already esports team's enjoying our application for their needs.
                    </p>
                    <p>
                        <li>Element's League Champion</li>
                        <li>Liga de Honor Burger King</li>
                        <li>Volcano League 2nd place</li>
                        <li>Tier 1 LLA staff users</li>
                    </p>
                </div>
                <div className="features2-img-section">
                    <img src={require("../images/champ.png")} className="features2-img"></img>
                </div>
            </div>
        </>
    )
}

export default QuickFeatures2;