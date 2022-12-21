import './SkillsSection.css'

import htmlIcon from '../assets/html5.svg'
import cssIcon from '../assets/css3.svg'
import jsIcon from '../assets/js.svg'
import reactIcon from '../assets/react.svg'
import bootstrapIcon from '../assets/bootstrap.svg'
import jqueryIcon from '../assets/jquery.svg'
import figmaIcon from '../assets/figma.svg'

export default function SkillsSection() {
    return (
        <section id='skills-section'>
            <div className='background-signs'>
                <h1>SKILLS</h1>
            </div>
            <h1>//skills</h1>
            <div className="tiles-container">
                <div className='top-row'>
                <div className="tile">
                    <div className="icon-container">
                        <img src={htmlIcon} />
                    </div>
                    <span>HTML</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={cssIcon} />
                    </div>
                    <span>CSS</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={jsIcon} />
                    </div>
                    <span>JavaScript</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={reactIcon} />
                    </div>
                    <span>React</span>
                </div>
                </div>
                <div className='bottom-row'>
                <div className="tile">
                    <div className="icon-container">
                        <img src={bootstrapIcon} />
                    </div>
                    <span>Bootstrap</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={jqueryIcon} />
                    </div>
                    <span>jQuery</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={figmaIcon} />
                    </div>
                    <span>Figma</span>
                </div>
                </div>
               
            </div>
        </section>
        
    )
}