import logo from '../assets/damianw_logo2_black.svg'
import './Navbar.css';

export default function Navbar() {
    return (
       <div className='nav'>
            <a className='logo-container' href='../../public/index.html'>
                <img src={logo}/>
            </a>
            <ul className='nav-list'>
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
    )
}