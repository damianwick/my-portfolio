import './ProjectsSection.css'
import ProjectSlider from './ProjectSlider'
import flashcardsImage from '../assets/dictionary_desktop.jpg'
import tumblrCloneImg from '../assets/tumblr_desktop.jpg'
import journalImg from '../assets/journal_desktop.jpg'
import portfolioImg from '../assets/portfolio_desktop.jpg'

export default function ProjectsSection() {
    const projects = [
        {
        name: 'Dictionary Flashcards', 
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi dolor,
        venenatis consectetur convallis in, elementum id augue. Etiam in libero et
        magna dictum varius. Curabitur laoreet lectus et urna luctus sollicitudin.
        Proin dapibus nunc dolor, sit amet vehicula eros pulvinar et. Sed id scelerisque elit. 
        Vestibulum est nisl`,
        imgSource: flashcardsImage, 
        liveLink: 'https://cheerful-starburst-1e396c.netlify.app/',
        codeLink: "https://github.com/damianwick/dictionary-flashcards"
        },
        { 
        name: 'Tumblr Clone',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisi dolor,
        venenatis consectetur convallis in, elementum id augue. Etiam in libero et
        magna dictum varius. Curabitur laoreet lectus et urna luctus sollicitudin.
        Proin dapibus nunc dolor, sit amet vehicula eros pulvinar et. Sed id scelerisque elit. 
        Vestibulum est nisl`,
        imgSource: tumblrCloneImg,
        liveLink: "https://fluffy-granita-e2b65a.netlify.app/",
        codeLink: "https://github.com/damianwick/my-tumblr-clone"
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
        imgSource: portfolioImg,
        codeLink: "https://github.com/damianwick/my-portfolio"
        }
    ];
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