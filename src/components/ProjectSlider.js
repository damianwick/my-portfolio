import './ProjectSlider.css';
import arrow from '../assets/arrow.svg';
import { useState } from 'react';

export default function ProjectSlider({ projects }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const firstProjectIndex = currentIndex === 0;
        const nextIndex = firstProjectIndex ? projects.length - 1 : currentIndex - 1;
        setCurrentIndex(nextIndex);
    };

    const goToNext = () => {
        const lastProjectIndex = currentIndex === projects.length - 1;
        const nextIndex = lastProjectIndex ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    };

    return (
        <div className='project-slider-container'>
        <div className='single-project-container' id='single-project-container'>
            <div className="left-column">
                <div>
                    <h2>{projects[currentIndex].name}</h2>
                    <p>{projects[currentIndex].description}</p>    
                </div>
                <div className='project-buttons'>
                    <a type="button" onClick={goToNext} href={projects[currentIndex].liveLink} className="btn project-btn">Live</a>
                    <a type="button" href={projects[currentIndex].codeLink} className="btn project-btn">Code</a>
                </div>
            </div>
            <div className="right-column">
                <picture>
                    <img src={projects[currentIndex].imgSource} />
                </picture>
            </div>    
        </div>
        <div className='navigationBtns'>
            <button type='button' className='previousProjectBtn' onClick={goToPrevious}>
                <img src={arrow}></img>
            </button>
            <button type='button' className='nextProjectBtn' onClick={goToNext}>
                <img src={arrow}></img>
            </button>
        </div>
        </div>
    )
}