const Achievments = () => {
    return (
        <div class="card">
            <div class="item item">
                <img className="logos" src={require("../images/champion.png")}></img>
                <span class="quantity"> 2 </span>
                <span class="text text"> Champions </span>
            </div>
            <div class="item item">
                <img className="logos" src={require("../images/2champion.png")}></img>
                <span class="quantity"> 1 </span>
                <span class="text text"> Sub-Champion </span>
            </div>
            <div class="item item">
                <img className="logos" src={require("../images/staff.png")}></img>
                <span class="quantity"> 8+ </span>
                <span class="text text"> Staff LLA & LVP </span>
            </div>
            <div class="item item">
                <img className="logos" src={require("../images/tracking.png")}></img>
                <span class="quantity"> 100% </span>
                <span class="text text"> Accurate tracking </span>
            </div>
        </div>
    )
}

export default Achievments;