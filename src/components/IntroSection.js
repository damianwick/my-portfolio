import './IntroSection.css'
import Navbar from "./Navbar"
import IntroGraphic from "./IntroGraphic"
import arrowDown from '../assets/Arrow-Down.svg'

export default function IntroSection() {
    return (
        <section id='intro-section'>
        <Navbar />
        <IntroGraphic />
        <div className='downBtn'>
            <p>Let's go!</p>
            <div>
                <a href='#'>
                    <img src={arrowDown} />
                </a>
            </div>
        </div>

        </section>

    )
}