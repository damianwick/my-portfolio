import './App.css';
import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectsSection';
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
