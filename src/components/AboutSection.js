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
                        <img src={headshot} alt="damian-wiecek-web-developer" />
                    </div>
                    <h2>Hi, I'm Damian</h2>
                    <p>
                    I’m a journalism graduate based in London who is passionate about all things web development, design and photography. Need help putting together a website? Struggling to nail your SEO? Or looking for eye-catching graphics your socials? I’m here for you!<br/> <br />I love brainstorming ideas with others and finding the right solution is what gets me going. If I sound like someone your team would benefit from, message me using the contact form or send an email at damianr.wick@gmail.com.<br />
                    </p>
                </div>
                    <a href='#' type='button' className='resume-btn btn'>Resume</a>
            </div>
        </section>
    )
}