import './IntroGraphic.css'
import vectorFace from '../assets/man_face.png'
import introGraphicMobile from '../assets/mobile-intro-graphic.png'

export default function IntroGraphic() {
    const pupils = document.getElementsByClassName('eye');
    
        document.body.addEventListener('mousemove', (event) => {
            for(let pupil of pupils) {
                let pupilX = pupil.getBoundingClientRect().left + pupil.clientWidth / 2;
                let pupilY = pupil.getBoundingClientRect().top + pupil.clientHeight / 2;

                let x = event.clientX;
                let y = event.clientY;

                let radian = Math.atan2(x - pupilX, y - pupilY);
                let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;

                pupil.style.transform = 'rotate(' + rotationDegrees + 'deg)';
            }
        })
    
    return (
        <div className='intrographic-container'>
            <div className='intro-graphic-mobile'>
                <img src={introGraphicMobile} />
            </div>
            <div className="intro-graphic-desktop">
                <div className='eyes'>
                    <div className='eye eye1'>
                        <div className='pupil pupil1'></div>
                    </div>
                    <div className='eye eye2'>
                        <div className='pupil pupil2'></div>
                    </div>
                </div>
                <img src={vectorFace}/>
            </div>
            <div className='intro-headline'>
                <p>I'm a</p>
                <div><span>FRONT-END</span> <span>WEB</span> <span>DEVELOPER</span></div>
                <p>ready to take the next step in my career</p>
            </div>
        </div>
    )
}