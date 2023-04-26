const ContactPage = () => {
    return (
        <div className="contact-container">
            <div className="contact-text">
                <h1 className="contact-header">Start building your<br/> future now </h1>
                <p className="contact-p">Utilize the best data solution<br/>
                that will enable you to be the best.<br/>
                The championship is only the first step.</p>
                <button class="cssbuttons-io-button"> Get in touch
                    <div class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path></svg>
                    </div>
                </button>
            </div>
            <div className="main-image-zone">
                <img src={require("../images/request.png")} className="contact-image"></img>
            </div>
        </div>

    )
}

export default ContactPage;