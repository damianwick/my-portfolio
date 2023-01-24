import logo from '../assets/damianw_logo2_black.svg'
import './Navbar.css';
import Hamburger from './Hamburger';
import { useState } from 'react';

export default function Navbar() {
 const [ isHamburgerOpen, setHamburgerState ] = useState(false);

 const toggleHamburger = () => {
    setHamburgerState(!isHamburgerOpen)
 };

    return (
        <>
            <div className='nav'>
                    <a className='logo-container' href='../../index.html'>
                        <img src={logo}/>
                    </a>
                    <div className='hamburger' onClick={toggleHamburger}>
                        <Hamburger isActive={isHamburgerOpen}/>
                    </div>
                    
                    <ul className='nav-list' onClick={toggleHamburger}>
                        <li>
                            <a href='#projects-section' className='underline-animation'>projects</a>
                        </li>
                        <li>
                            <a href='#skills-section' className='underline-animation'>skills</a>
                        </li>
                        <li>
                            <a href='#about-section' className='underline-animation'>about</a>
                        </li>
                        <li>
                            <a href='#contact-section' className='underline-animation'>contact me</a>
                        </li>
                    </ul>
            </div>

            <style jsx="true">{`
                @media only screen and (max-width: 1024px) {
                    .nav-list{
                        visibility: ${isHamburgerOpen ? 'visible' : 'none'};
                        opacity: ${isHamburgerOpen ? '1' : '0'};
                        transform: ${isHamburgerOpen ? 'translateY(0)' : 'translateY(-200%)'}; 
                        transition: transform 0.1s linear 0s;   
                    }
                }
            `}    
            </style>
        </>
    )
}