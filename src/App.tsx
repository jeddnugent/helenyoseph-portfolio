import ContactMe from './components/ContactMe';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import './styles/App.css';

function App() {

  return (
    <>
      <Header />
      <ImageGrid
        imageOneUrl="src/assets/concert_shot_1.png"
        imageTwoUrl="src/assets/concert_shot_2.png"
        imageThreeUrl="src/assets/portait_shot_1.png"
        imageFourUrl="src/assets/concert_shot_5.png"
        imageFiveUrl="src/assets/concert_shot_6.png"
        imageSixUrl="src/assets/concert_shot_7.png"
        imageSevenUrl="src/assets/concert_shot_8.png"
        imageEightUrl="src/assets/concert_shot_9.png"
        imageNineUrl="src/assets/concert_shot_3.png"
      />
      <ContactMe />
      <ImageGrid
        imageOneUrl="src/assets/concert_shot_15.png"
        imageTwoUrl="src/assets/concert_shot_11.png"
        imageThreeUrl="src/assets/concert_shot_16.png"
        imageFourUrl="src/assets/concert_shot_13.png"
        imageFiveUrl="src/assets/concert_shot_10.png"
        imageSixUrl="src/assets/concert_shot_18.png"
        imageSevenUrl="src/assets/concert_shot_19.png"
        imageEightUrl="src/assets/concert_shot_20.png"
        imageNineUrl="src/assets/concert_shot_21.png"
      />
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
