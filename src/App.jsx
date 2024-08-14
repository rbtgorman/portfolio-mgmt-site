import { useState } from 'react';

import Navigation from './components/Navigation.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Education from './components/Education.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Projects from './components/Projects.jsx';

function App() {
    const [currentSection, setCurrentSection] = useState('about');

    const sections = {
        about: <About />,
        experience: <Experience />,
        education: <Education />,
        skills: <Skills />,
        Navigation: <Navigation />,
        Contact: <Contact />,
        Projects: <Projects />
    };

    return (
        <main className="h-screen my-8 flex gap-8">
            <Navigation 
                onSelectSection={setCurrentSection} 
                currentSection={currentSection}
            />
            {sections[currentSection]}
        </main>
    );
}

export default App;