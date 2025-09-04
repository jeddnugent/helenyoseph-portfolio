import ContactMe from './components/ContactMe';
import Header from './components/Header';
import './styles/App.css';
import gridImages from "./interfaces/gridImages";
import AnimatedGridItem from "./components/AnimatedGridItem";

function App() {

  return (
    <>
      <Header />
      <div className='ImageGrid-container'>
        {gridImages.map((imageUrl: string, index) => (
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
