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
                    I’m a self-taught front-end web developer, based in London, Waterloo. Currently looking to put my foot in the industry, in a junior position. <br /> <br />
                    I got interested in web development after starting to experiment with graphic design. At one point the next obvious step for me was creating a website, where I could showcase my work. I couldn’t find a single appealing template on any of the most popular website builders so I decided to figure out how to use HTML. After building a simple website, I realised that the whole experience was more enjoyable than the time I had spent in Adobe Illustrator. I gave it some serious thought and here we are. <br/> <br />My goal is to work for a company that would benefit from the skills I already have, but also would enable me to expand my abilities. Ultimately I’d like to gain enough knowledge to call myself a full-stack developer. My dream project is an ear training app for musicians, as I’m a huge music enthusiast.<br /> <br />PS: I have a bachelor's degree in journalism and mass communication.
                    </p>
                </div>
                    <a href='#' type='button' className='resume-btn btn'>Resume</a>
            </div>
        </section>
    )
}