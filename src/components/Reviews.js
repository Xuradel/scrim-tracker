const Reviews = () => {
    return (
        <div className="reviews-container" id="reviews-section">
            <div class="card2">
                <div class="card2-info">
                    <div class="card2-avatar"></div>
                    <div class="card2-title">-Zzzofia</div>
                    <div class="card2-subtitle"><span className="gold2">Support for Pirate Dream</span></div>
                    <div class="card2-subtitle">"Pues la app era bastante facil de usar e igual bastante sencilla de entender, y tambien dentro de juego no afectaba al rendimiento del mismo, como bajar fps o ese tipo de problemas" <br /><br />
                        "Well the application was very easy to use and very simple to understand, inside the game there were no
                        performance issues like frame drops."</div>
                    <div className="card2-image">
                        <img src={require('../images/pirate.webp')}></img>
                    </div>
                </div>

            </div>
            <div class="card2">
                <div class="card2-info">
                    <div class="card2-avatar"></div>
                    <div class="card2-title">-Schi</div>
                    <div class="card2-subtitle"><span className="gold2">Eclipse Gaming Analyst</span></div>
                    <div class="card2-subtitle">"Lo que podria decirte es que me sirvio para dejar el trabajo de base de datos automatizado al 100% y todos los players que la usaron  no tuvieron problema y fue simple para ellos adaptarse." <br /><br />
                        "What I can say is that it allowed me to automate database work at 100%, and every player that used it
                        had no problems, it was also simple to adapt and understand."</div>
                    <div className="card2-image">
                        <img src={require('../images/eclipse.webp')}></img>
                    </div>
                </div>
            </div>
            <div class="card2">
                <div class="card2-info">
                    <div class="card2-avatar"></div>
                    <div class="card2-title">-Yostin</div>
                    <div class="card2-subtitle"><span className="gold2">Saprissa esports Head Coach</span></div>
                    <div class="card2-subtitle">"Rewiew of the application number 3"</div>
                    <div className="card2-image">
                            <img src={require('../images/saprissa.webp')}></img>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews;