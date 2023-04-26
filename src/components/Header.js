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

const Header = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 1280px)' })
    
    useEffect(() => {
        if(isMobile){
            script()
        }
    },[])

    return (

        <header className='navbar'>
            <img src={require("../images/logo.png")} alt="logo" id="logo"></img>
            <nav>
                <ul className="nav-menu">
                    <li className='nav-item'><a href="#" className='nav-link'>About</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Services</a></li>
                    <li className='nav-item'><a href="#" className='nav-link'>Contact</a></li>
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