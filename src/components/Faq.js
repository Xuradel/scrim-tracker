const Faq = () => {
    return (
        <div class="box" id="faq-section">
            <p class="heading">Frequent asked <span className="gold">questions</span></p>
            <div class="faqs">
                <details>
                    <summary className="textH">Question 1</summary>
                    <p className="textP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </details>
                <details>
                    <summary className="textH">Question 2</summary>
                    <p className="textP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </details>
                <details>
                    <summary className="textH">Question 3</summary>
                    <p className="textP">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </details>
            </div>
        </div>
    )
}

export default Faq;