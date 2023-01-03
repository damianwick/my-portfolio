import './IntroGraphic.css'
import vectorFace from '../assets/vector-face.svg'

export default function IntroGraphic() {
    return (
        <div className='intrographic-container'>
            <div className="intro-graphic-container">
                <img src={vectorFace}/>
            </div>
            <div className='intro-headline'>
                <p>I'm a</p>
                {/* <h1><span>FRONT-END</span> <span>WEB</span> <span>DEVELOPER</span></h1> */}
                <div><span>FRONT-END</span> <span>WEB</span> <span>DEVELOPER</span></div>
                <p>looking to step into the industry</p>
            </div>
        </div>
    )
}