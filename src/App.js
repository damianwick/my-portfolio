import './App.css';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import IntroSection from './components/IntroSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="app">
      <IntroSection />
        <div className='wrapper'>
          <ProjectsSection />
          <SkillsSection />
          <AboutSection />
          <ContactSection />
        </div>
        <Footer />
    </div>
  )
}

export default App;
