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
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi dolor,
        venenatis consectetur convallis in, elementum id augue. Etiam in libero et
        magna dictum varius. Curabitur laoreet lectus et urna luctus sollicitudin.
        Proin dapibus nunc dolor, sit amet vehicula eros pulvinar et. Sed id scelerisque elit. 
        Vestibulum est nisl`,
        imgSource: flashcardsImage
        },
        { 
        name: 'Tumblr Clone',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi dolor,
        venenatis consectetur convallis in, elementum id augue. Etiam in libero et
        magna dictum varius. Curabitur laoreet lectus et urna luctus sollicitudin.
        Proin dapibus nunc dolor, sit amet vehicula eros pulvinar et. Sed id scelerisque elit. 
        Vestibulum est nisl`,
        imgSource: tumblrCloneImg
        },
        {
        name: 'Journal Web App',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi dolor,
        venenatis consectetur convallis in, elementum id augue. Etiam in libero et
        magna dictum varius. Curabitur laoreet lectus et urna luctus sollicitudin.
        Proin dapibus nunc dolor, sit amet vehicula eros pulvinar et. Sed id scelerisque elit. 
        Vestibulum est nisl`,
        imgSource: journalImg
        },
        {
        name: 'My Portfolio Website',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi dolor,
        venenatis consectetur convallis in, elementum id augue. Etiam in libero et
        magna dictum varius. Curabitur laoreet lectus et urna luctus sollicitudin.
        Proin dapibus nunc dolor, sit amet vehicula eros pulvinar et. Sed id scelerisque elit. 
        Vestibulum est nisl`,
        imgSource: portfolioImg
        }
    ]
    return (
        <section id='projects-section'>
            <div className='background-signs'>
                <h1>PROJECTS</h1>
                <h1>PROJECTS</h1>
            </div>
            <div className='projects-container section-container'>
                <ProjectSlider projects={projects} />
            </div>
        </section>
    )
}