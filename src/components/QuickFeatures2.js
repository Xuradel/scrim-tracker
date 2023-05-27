import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'

const QuickFeatures2 = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const isMobile = useMediaQuery({ query: '(max-width: 1280px)' })

    return (
        <div className="features2-section">
            <div className="features2" >
                <div className="features2-text" data-aos="fade-in">
                    <h1><span className="gold">Easy</span> to access information to every match up played</h1>
                    <p>Record every match up of your scrims, and receive the data in a way
                        that you can easiliy visualize it.
                    </p>
                    <p>
                        <li>Easy to visualize</li>
                        <li>Leave the hardwork for our app</li>
                        <li>Verify things that needs improving</li>
                        <li>Analyze how your match ups are going</li>
                    </p>
                </div>
                <div className="features2-img-section" data-aos="fade-in">
                    <img src={require("../images/matchups.jpeg")} className="features2-img"></img>
                </div>
            </div>

            <div className="features2-2" >
                <div className="features2-text" data-aos="fade-in">
                    <h1><span className="gold">Quick</span> glance at your champions statistics to know what needs more attention</h1>
                    <p>Get a list of your champion's statistics in order, filter by games, wins, losses
                        and a lot more.
                    </p>
                    <p>
                        <li>Check your best performing champions</li>
                        <li>Study and analyze what is best for your team</li>
                        <li>Build draft's around your player's best tools</li>
                        <li>Take better decisions around draft</li>
                    </p>
                </div>
                <div className="features2-img-section" data-aos="fade-in">
                    <img src={require("../images/championstats.jpeg")} className="features2-img"></img>
                </div>
            </div>


            <div className="features2" >
                <div className="features2-text" data-aos="fade-in">
                    <h1><span className="gold">Track</span> all your games, from builds, stats, champions, drafts and more!</h1>
                    <p>With our solution you will have all the information you require to
                        better understand your team's needs.
                    </p>
                    <p>
                        <li>Beautiful UI for easier visualization</li>
                        <li>Ordered and filtered as you need</li>
                        <li>Sort by more complex analysis such as game version</li>
                        <li>Application updated on every patch as required</li>
                    </p>
                </div>
                <div className="features2-img-section" data-aos="fade-in">
                    <img src={require("../images/scrimtracker.jpeg")} className="features2-img"></img>
                </div>
            </div>


            <div className="features2-2" >
                <div className="features2-text" data-aos="fade-in">
                    <h1><span className="gold">Player</span> profile description with in depth statistics.</h1>
                    <p>Check your player's individual profiles containing a lot of important information.
                    </p>

                </div>
                <div className="features2-img-section" data-aos="fade-in">
                    <img src={require("../images/playerprofile.jpeg")} className="features2-img"></img>
                </div>
            </div>

            <div className="features2" >
                <div className="features2-text" data-aos="fade-in">
                    <h1><span className="gold">Analyze</span> draft pick's order and ban phase of every game in order</h1>
                    <p>Get a quick look at your draft's order from pick and ban phase,
                        with more information at hand such as game version, date, results and more.
                    </p>

                </div>
                <div className="features2-img-section" data-aos="fade-in">
                    <img src={require("../images/pickorder.jpeg")} className="features2-img"></img>
                </div>
            </div>


            <div className="features2-2" >
                <div className="features2-text" data-aos="fade-in">
                    <h1><span className="gold">Quickly</span> check your team match history</h1>
                    <p>Have a quick glance at your team's results to see how you have been
                        improving with our application.
                    </p>
                </div>
                <div className="features2-img-section" data-aos="fade-in">
                    <img src={require("../images/matchhistory.jpeg")} className="features2-img"></img>
                </div>
            </div>

            <div className="features2" >
                <div className="features2-text" data-aos="fade-in">
                    <h1>Want to know <span className="gold">more?</span></h1>
                    <p>Here's some of our clients that have already used our solution to
                        achieve their goals!
                    </p>
                    <p>
                        <li>Element's League Champion</li>
                        <li>Liga de Honor Burger King</li>
                        <li>Volcano League 2nd place</li>
                        <li>Tier 1 LLA staff users</li>
                    </p>
                </div>
                <div className="features2-img-section" data-aos="fade-in">
                    <img src={require("../images/champ.png")} className="features2-img"></img>
                </div>
            </div>


        </div>
    )
}

export default QuickFeatures2;