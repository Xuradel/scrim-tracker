import { Fade } from "react-awesome-reveal";

const Achievments = () => {
    return (
        <div class="card">
            <div class="item item">
                <Fade delay={100}><img className="logos" src={require("../images/champion.png")}></img></Fade>
                <Fade delay={200} className="test1"><span class="quantity"> 2 </span></Fade>
                <Fade delay={300} className="test1"><span class="text text"> Champions </span></Fade>


            </div>
            <div class="item item">
                <Fade delay={400}><img className="logos" src={require("../images/2champion.png")}></img></Fade>
                <Fade delay={500} className="test1"><span class="quantity"> 1 </span></Fade>
                <Fade delay={600} className="test1"><span class="text text"> Sub-Champion </span></Fade>



            </div>
            <div class="item item">
                <Fade delay={700}><img className="logos" src={require("../images/staff.png")}></img></Fade>
                <Fade delay={800} className="test1"><span class="quantity" color="white"> 8+ </span></Fade>
                <Fade delay={900} className="test1"><span class="text text"> Staff LLA & LVP </span></Fade>



            </div>
            <div class="item item">
                <Fade delay={1000}><img className="logos" src={require("../images/tracking.png")}></img></Fade>
                <Fade delay={1100} className="test1"><span class="quantity"> 100% </span></Fade>
                <Fade delay={1200} className="test1"><span class="text text"> Accurate tracking </span></Fade>



            </div>
        </div>
    )
}

export default Achievments;