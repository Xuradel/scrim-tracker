import React, { useEffect } from 'react'
import AOS from "aos"
import 'aos/dist/aos.css'
import { useMediaQuery } from 'react-responsive'

const QuickFeatures = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    const isMobile = useMediaQuery({ query: '(max-width: 1280px)' })

    return (
        <div className="features-1" id="features-section">
            {!isMobile ? <div className="features1-item">
                <div className="features1-inside" data-aos="fade-left">
                    <img src={require("../images/depth.png")} className="features1-icon"></img>
                    <h2>IN DEPTH <span className="gold">TRACKING</span></h2>
                </div>
                <p data-aos="fade-up">Track every second of data, starting from lobby, champion selection, in-game
                    and finally record post-game statistics.
                </p>
            </div> : <div className="features1-item">
                <div className="features1-inside" >
                    <img src={require("../images/depth.png")} className="features1-icon"></img>
                    <h2>IN DEPTH <span className="gold">TRACKING</span></h2>
                </div>
                <p >Track every second of data, starting from lobby, champion selection, in-game
                    and finally record post-game statistics.
                </p>
            </div>}

            {!isMobile ? <div className="features1-item">
                <div className="features1-inside" data-aos="fade-left">
                    <img src={require("../images/analyze.png")} className="features1-icon"></img>
                    <h2>ACCURATE <span className="gold">INFORMATION</span></h2>
                </div>
                <p data-aos="fade-up">Analyze every move and data recorded by our application every second.
                    You will have access to precise information.
                </p>
            </div> : <div className="features1-item">
                <div className="features1-inside" >
                    <img src={require("../images/analyze.png")} className="features1-icon"></img>
                    <h2>ACCURATE <span className="gold">INFORMATION</span></h2>
                </div>
                <p >Analyze every move and data recorded by our application every second.
                    You will have access to precise information.
                </p>
            </div>}

            {!isMobile ? <div className="features1-item">
                <div className="features1-inside" data-aos="fade-left">
                    <img src={require("../images/data.png")} className="features1-icon"></img>
                    <h2>RELIABLE <span className="gold">DATA</span></h2>
                </div>
                <p data-aos="fade-up">Our data is reliable since it uses League's API and our code process
                    the information in a way it's recorded without mistakes.
                </p>
            </div> : <div className="features1-item">
                <div className="features1-inside" >
                    <img src={require("../images/data.png")} className="features1-icon"></img>
                    <h2>RELIABLE <span className="gold">DATA</span></h2>
                </div>
                <p >Our data is reliable since it uses League's API and our code process
                    the information in a way it's recorded without mistakes.
                </p>
            </div>}

        </div>
    )
}

export default QuickFeatures;