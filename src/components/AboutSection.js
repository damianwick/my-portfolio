import './AboutSection.css';
import headshot from '../assets/damian_headshot.jpg'

export default function AboutSection() {
    return (
        <section id='about-section'>
            <div className='background-signs'>
                <h1>ABOUT</h1>
                <h1>ME</h1>
            </div>
            <div className='about-container'> 
                <div className='about-inner-container'>
                    <div className='headshot-container'>
                        <img src={headshot} />
                    </div>
                    <h2>Hi, I'm Damian</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi dolor,
                    venenatis consectetur convallis in, elementum id augue. Etiam in libero et
                    magna dictum varius. Curabitur laoreet lectus et urna luctus sollicitudin.
                    Proin dapibus nunc dolor, sit amet vehicula eros pulvinar et. Sed id scelerisque elit. 
                    Vestibulum est nisl, commodo vel sem ultricies, semper aliquet odio. Nulla euismod,
                    purus non sodales tristique, nisl urna varius mi, in placerat ante nisl at quam.
                    Maecenas sapien risus, pellentesque eu feugiat eu, convallis eget magna. Nunc consectetur
                    , quam sit amet ornare pellentesque, neque arcu lobortis metus, eu feugiat
                    dolor felis sit amet urna. Suspendisse sollicitudin porttitor metus quis tempus.
                    </p>
                </div>
                    <a href='#' type='button' className='resume-btn btn'>Resume</a>
            </div>

        </section>
    )
}