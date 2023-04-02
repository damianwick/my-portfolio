import './ProjectsSection.css'
import ProjectSlider from './ProjectSlider'
import flashcardsImage from '../assets/dictionary_desktop.jpg'
import tumblrCloneImg from '../assets/tumblr_desktop.jpg'
import journalImg from '../assets/journal_desktop.jpg'
import portfolioImg from '../assets/portfolio_desktop.jpg'

import htmlIcon from '../assets/htmlIcon.svg'
import cssIcon from '../assets/cssIcon.svg'
import jsIcon from '../assets/jsIcon.svg'
import reactIcon from '../assets/reactIcon.svg'
import bootstrapIcon from '../assets/bootstrapIcon.svg'
import sassIcon from '../assets/sassIcon.svg'

export default function ProjectsSection() {
    const projects = [
        {
        name: 'Dictionary Flashcards (Words API)', 
        description: `Dictionary Flashcards is a web app, that lets users search for definitions to words 
        in English. It uses a database from Words API. Every definition can be 
        added to the list of flashcards, that users can flip through by accessing "Flashcards" tab. The app uses browser’s 
        local storage to keep track the words and their definitions. The interface has 
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
         Practicing HTML and Sass skills was the main incentive for starting 
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
        description: `A prototype of a journaling app that uses DOM manipulation to create entries. 
        Users can style entries using formatting tools at the bottom of the text area. The prototype uses Date() constructor to assign date to each entry. 
        Entries can be edited, deleted and expanded.`,
        imgSource: journalImg,
        liveLink: "https://chic-blancmange-b37820.netlify.app/",
        codeLink: "https://github.com/damianwick/journal-app",
        iconSrcList: [sassIcon, jsIcon, htmlIcon]
        },
        {
        name: 'React Portfolio Website',
        description: `A fully responsive React portfolio website in a landing page format. Utilizes React's State hook to handle the functionality of the projects gallery and the hamburger menu in a mobile view.
        This project was an opportunity for me to polish my React skills and solidify 
        what I had already known about the library. The website is hosted on GitHub Pages. The contact form has been connected using Formspree.`,
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