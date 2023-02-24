import './SkillsSection.css'
import htmlIcon from '../assets/htmlIcon.svg'
import cssIcon from '../assets/cssIcon.svg'
import jsIcon from '../assets/jsIcon.svg'
import reactIcon from '../assets/reactIcon.svg'
import bootstrapIcon from '../assets/bootstrapIcon.svg'
import jqueryIcon from '../assets/jquery.svg'
import figmaIcon from '../assets/figma.svg'
import gitIcon from '../assets/git.svg'
import sassIcon from '../assets/sassIcon.svg'

export default function SkillsSection() {
    return (
        <section id='skills-section'>
            <div className='background-signs'>
                <h1>SKILLS</h1>
            </div>
            <div className="tiles-container">
                <div className="tile">
                    <div className="icon-container">
                        <img src={reactIcon} />
                    </div>
                    <span>React</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={jsIcon} />
                    </div>
                    <span>JavaScript</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={jqueryIcon} />
                    </div>
                    <span>jQuery</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={sassIcon} />
                    </div>
                    <span>Sass</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={bootstrapIcon} />
                    </div>
                    <span>Bootstrap</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={gitIcon} />
                    </div>
                    <span>Git</span>
                </div>
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
                        <img src={figmaIcon} />
                    </div>
                    <span>Figma</span>
                </div>
            </div>
        </section>       
    )
}