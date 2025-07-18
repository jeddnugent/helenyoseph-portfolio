import ContactMe from './components/ContactMe';
import Header from './components/Header';
import './styles/App.css';
import gridImages1 from "./interfaces/gridImages1";
import gridImages2 from "./interfaces/gridImages2";
import AnimatedGridItem from "./components/AnimatedGridItem";

function App() {

  return (
    <>
      <Header />
      <div className='ImageGrid-container'>
        {gridImages1.map((imageUrl: string, index) => (
          <AnimatedGridItem key={index} imageUrl={imageUrl} index={index} />
        ))}
      </div>

      <div className='ImageGrid-container'>
        {gridImages2.map((imageUrl: string, index) => (
          <AnimatedGridItem key={index} imageUrl={imageUrl} index={index} />
        ))}
      </div>

      <ContactMe />

      <footer>
        <p>© Helen Yoseph {new Date().getFullYear()}</p>
        <span>Demo by Jedd Nugent</span>
        <a href="https://www.linkedin.com/in/jedd-nugent/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/jeddnugent/SMI-Food-Journal" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
          />
        </a>
      </footer>


    </>
  );
}

export default App;
