import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useEffect } from 'react';


function script() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        })
    }

    document.querySelectorAll(".nav-link").forEach(n => n.
        addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }))
}
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

const Header = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 1280px)' })

    useEffect(() => {
        if (isMobile) {
            script()
        }
    }, [])

    return (

        <header className='navbar'>
            <div className='logo-section'>
            <img src={require("../images/logo.png")} alt="logo" id="logo"></img>
            <h3>LEAGUE STATS PRO</h3>
            </div>
            
            <nav>
                <ul className="nav-menu">
                    <li className='nav-item'><a href="#featuresPage" className='nav-link' onClick={handleClick("features")}>Features</a></li>
                    <li className='nav-item'><a href="#reviewsPage" className='nav-link' onClick={handleClick("reviews")}>Reviews</a></li>
                    <li className='nav-item'><a href="#FAQpage" className='nav-link' onClick={handleClick("faq")}>FAQ</a></li>
                    <li className='nav-item'><a href="#contactPage" className='nav-link' onClick={handleClick("contact")}>Contact</a></li>
                </ul>
                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </header>
    )
}

export default Header;