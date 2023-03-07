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
                        <img src={reactIcon} alt="react-icon"/>
                    </div>
                    <span>React</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={jsIcon} alt="javascript-icon"/>
                    </div>
                    <span>JavaScript</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={jqueryIcon} alt="jquery-icon"/>
                    </div>
                    <span>jQuery</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={sassIcon} alt="sass-icon"/>
                    </div>
                    <span>Sass</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={bootstrapIcon} alt="bootstrap-icon"/>
                    </div>
                    <span>Bootstrap</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={gitIcon} alt="git-icon"/>
                    </div>
                    <span>Git</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={htmlIcon} alt="html-icon"/>
                    </div>
                    <span>HTML</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={cssIcon} alt="css-icon"/>
                    </div>
                    <span>CSS</span>
                </div>
                <div className="tile">
                    <div className="icon-container">
                        <img src={figmaIcon} alt="figma-icon"/>
                    </div>
                    <span>Figma</span>
                </div>
            </div>
        </section>       
    )
}