import './IntroSection.css'
import Navbar from "./Navbar"
import IntroGraphic from "./IntroGraphic"
import arrow from '../assets/arrow.svg'

export default function IntroSection() {
    return (
        <section id='intro-section'>
        <Navbar />
        <IntroGraphic />
        <div className='downBtn'>
            <p>Let's go!</p>
            <div>
                <a href='#projects-section'>
                    <img src={arrow} />
                </a>
            </div>
        </div>
        </section>

    )
}