import './IntroGraphic.css'
import vectorFace from '../assets/vector-face.svg'

export default function IntroGraphic() {
    return (
        <div className='container'>
            <div className="intro-graphic-container">
                <img src={vectorFace}/>
            </div>
            <div className='intro-headline'>
                <p>I'm a</p>
                <h1>FRONT-END WEB DEVELOPER</h1>
                <p>looking to step into the industry</p>
            </div>
        </div>
    )
}