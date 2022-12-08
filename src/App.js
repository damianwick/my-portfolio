import './App.css';
import IntroSection from './IntroSection';
import ProjectsSection from './ProjectsSection';
function App() {
  return (
    <div className="app">
     <IntroSection />
      <div className='wrapper'>
         <ProjectsSection />
      </div>
     
    </div>
   
  )
}

export default App;
