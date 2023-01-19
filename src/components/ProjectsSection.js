import './ProjectsSection.css'
import ProjectSlider from './ProjectSlider'
import flashcardsImage from '../assets/dictionary_desktop.jpg'
import tumblrCloneImg from '../assets/tumblr_desktop.jpg'
import journalImg from '../assets/journal_desktop.jpg'
import portfolioImg from '../assets/portfolio_desktop.jpg'

import htmlIcon from '../assets/html5.svg'
import cssIcon from '../assets/css3.svg'
import jsIcon from '../assets/js.svg'
import reactIcon from '../assets/react.svg'
import bootstrapIcon from '../assets/bootstrap.svg'
import sassIcon from '../assets/sass.svg'

export default function ProjectsSection() {
    const projects = [
        {
        name: 'Dictionary Flashcards (Words API)', 
        description: `Dictionary Flashcards is a web app, that lets users search for definitions to words 
        in English. It uses a database from Words API. Every definition can be 
        added to the list of flashcards, that users can flip through by accessing "Flashcards" tab. The app uses browser’s 
        local storage to remember the words and their definitions. The interface has 
        been styled with Bootstrap.   `,
        imgSource: flashcardsImage, 
        liveLink: 'https://cheerful-starburst-1e396c.netlify.app/',
        codeLink: "https://github.com/damianwick/dictionary-flashcards",
        iconSrcList: [bootstrapIcon, jsIcon, htmlIcon]
        },
        { 
        name: 'Tumblr Clone',
        description: `A fully responsive HTML clone of the Tumblr’s main page. The goal for this project was to 
         recreate the website’s layout as closely as possible. 
         Practicing HTML and CSS skills was the main incentive for starting 
         the development, although a little bit of JavaScript has been used to handle the functionality of the side navigation. 
         Trying to replicate something that has already been built, 
         in my opinion helps to understand others’ approach to web development.`,
        imgSource: tumblrCloneImg,
        liveLink: "https://fluffy-granita-e2b65a.netlify.app/",
        codeLink: "https://github.com/damianwick/my-tumblr-clone",
        iconSrcList: [sassIcon, jsIcon, htmlIcon]
        },
        {
        name: 'Journal App',
        description: `Every portfolio needs a CRUD app, so here is mine. 
        In Journal App users can not only create entries but also style 
        them using the formatting tools at the bottom of the text area. 
        Each entry has a date of when it was created, that is displayed above it. Entries can be edited, deleted and expanded.`,
        imgSource: journalImg,
        liveLink: "https://chic-blancmange-b37820.netlify.app/",
        codeLink: "https://github.com/damianwick/journal-app",
        iconSrcList: [sassIcon, jsIcon, htmlIcon]
        },
        {
        name: 'My Portfolio Website',
        description: `A fully responsive React portfolio website in a landing page format. 
        This project was an opportunity for me to polish my react skills and solidify 
        what I had already known about the library. In addition, I learned how to make 
        a contact form work using PHP and how to deploy the entire project. `,
        imgSource: portfolioImg,
        codeLink: "https://github.com/damianwick/my-portfolio",
        iconSrcList: [reactIcon, jsIcon, htmlIcon, cssIcon]
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
    );
};