import './ProjectsSection.css'
import ProjectSlider from './ProjectSlider'
import flashcardsImage from '../assets/project_img.jpg'
import tumblrCloneImg from '../assets/example1.jpg'
import journalImg from '../assets/example2.jpg'
import portfolioImg from '../assets/example3.jpg'

export default function ProjectsSection() {
    const projects = [
        {
        name: 'Dictionary Flashcards', 
        description: 'project description',
        imgSource: flashcardsImage
        },
        { 
        name: 'Tumblr Clone',
        description: 'tumblr clone description',
        imgSource: tumblrCloneImg
        },
        {
        name: 'Journal Web App',
        description: 'Journal Web App description',
        imgSource: journalImg
        },
        {
        name: 'My Portfolio Website',
        description: 'My Portfolio Website description',
        imgSource: portfolioImg
        }
    ]
    return (
        <section id='projects-section'>
            <div className='background-signs'>
                <h1>PROJECTS</h1>
                <h1>PROJECTS</h1>
            </div>
            <h1>//projects</h1>
            <div className='projects-container'>
                <ProjectSlider projects={projects} />
            </div>
        </section>
    )
}