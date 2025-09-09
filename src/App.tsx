import { getImageGrid } from './api/cloudinaryApi';
import { useEffect, useState } from "react";

import ContactMe from './components/ContactMe';
import Header from './components/Header';
import AnimatedGridItem from "./components/AnimatedGridItem";

import './styles/App.css';

function App() {
  const [images, setImages] = useState<string[]>([]);

  async function fetchImageGrid() {
    try {
      const imgGridResult = await getImageGrid();
      if (imgGridResult.data.resources.length > 0) {
        const imageIds = imgGridResult.data.resources.map((item: any) => item.public_id);
        console.log("img ids", imageIds);
        imageIds.sort();
        setImages(imageIds);
      }
      else {
        setImages([]);
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchImageGrid();
  }, []);

  return (
    <>
      <Header />
      <div className='ImageGrid-container'>
        {images.map((imageUrl: string, index) => (
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
