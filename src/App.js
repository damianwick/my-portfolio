import './App.css';
import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
function App() {
  return (
    <div className="app">
     <IntroSection />
      <div className='wrapper'>
         <ProjectsSection />
         <SkillsSection />

      </div>
     
    </div>
   
  )
}

export default App;
