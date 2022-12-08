import './ProjectsSection.css'
import ProjectComponent from './ProjectComponent'
import flashcardsImage from './assets/project_img.jpg'
import { Component } from 'react'

export default function ProjectsSection() {   
    return (
        <section id='projects-section'>
            <h1>//projects</h1>
            <div className='projects-container'>
                <ProjectComponent 
                name='Dictionary Flashcards' 
                description='project description'
                imgSource={flashcardsImage}
                />
                <ProjectComponent
                name='Tumblr Clone'
                description='tumblr clone description'
                imgSource={flashcardsImage}
                />
                <ProjectComponent
                name='Journal Web App'
                description='Journal Web App description'
                imgSource={flashcardsImage}
                />
                <ProjectComponent
                name='My Portfolio Website'
                description='My Portfolio Website description'
                imgSource={flashcardsImage}
                />
            </div>
        </section>
    )
}