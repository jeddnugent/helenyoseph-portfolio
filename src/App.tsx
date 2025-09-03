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
        <p>© Helen Yoseph {new Date().getFullYear()} All Rights Reserved</p>
        <span>Website by <a href='https://www.jeddnugent.com' target='_blank'>Jedd Nugent</a></span>
      </footer>


    </>
  );
}

export default App;
