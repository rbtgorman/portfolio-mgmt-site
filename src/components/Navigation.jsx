import { FaUser, FaBriefcase, FaGraduationCap, FaCogs, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navigation({ onSelectSection, currentSection }) {
    const sections = [
        { name: 'About', icon: <FaUser /> },
        { name: 'Experience', icon: <FaBriefcase /> },
        { name: 'Education', icon: <FaGraduationCap /> },
        { name: 'Skills', icon: <FaCogs /> },
        { name: 'Contact', icon: <FaEnvelope /> },
        { name: 'Projects', icon: <FaFolder /> }

    ];

    return (
        <aside className="w-1/4 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl flex flex-col justify-between">
            <div>
                <img src="/path-to-your-image.jpg" alt="Your Name" className="w-32 h-32 rounded-full mx-auto mb-4" />
                <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200 text-center">
                    Your Name
                </h2>
                <nav>
                    <ul>
                        {sections.map((section) => (
                            <li key={section.name}>
                                <button
                                    className={`w-full text-left px-2 py-1 rounded-sm my-1 flex items-center
                                        ${currentSection === section.name.toLowerCase() ? 'bg-stone-800 text-stone-200' : 'text-stone-400'}`}
                                    onClick={() => onSelectSection(section.name.toLowerCase())}
                                    aria-current={currentSection === section.name.toLowerCase() ? 'page' : undefined}
                                >
                                    <span className="mr-2">{section.icon}</span>
                                    {section.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex justify-center space-x-4 mt-8">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                    <FaGithub className="text-2xl text-stone-400 hover:text-stone-200" />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                    <FaLinkedin className="text-2xl text-stone-400 hover:text-stone-200" />
                </a>
            </div>
        </aside>
    );
}