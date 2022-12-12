import './ProjectComponent.css'

export default function ProjectComponent(props) {
    return (
        <div className='project-container' id='project-container'>
            <div className="left-column">
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.description}</p>    
                </div>
                <div>
                    <a type="button" href={props.liveLink} className="btn">Live</a>
                    <a type="button" href={props.codeLink} className="btn">Code</a>
                </div>
            </div>
            <div className="right-column">
                <picture>
                    <img src={props.imgSource} />
                </picture>
            </div>    
        </div>
    )
}