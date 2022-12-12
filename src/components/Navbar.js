import logo from '../assets/damianw_logo2_black.svg'
import './Navbar.css';

export default function Navbar() {
    return (
       <div className='nav'>
            <div className='logo-container'>
                <img src={logo}/>
            </div>
            <ul className='nav-list'>
                <li>
                    <a href='#'>projects</a>
                </li>
                <li>
                    <a href='#'>skills</a>
                </li>
                <li>
                    <a href='#'>about</a>
                </li>
                <li>
                    <a href='#'>contact me</a>
                </li>
            </ul>
       </div>
    )
}