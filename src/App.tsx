import { getImageGrid } from "./api/cloudinaryApi";
import { useEffect, useState } from "react";

import ContactMe from "./components/ContactMe";
import Header from "./components/Header";
import AnimatedGridItem from "./components/AnimatedGridItem";

import "./styles/App.css";

function App() {
  type gridImage = {
    public_id: string;
    order: number;
    title: string;
    desc: string;
  };

  const [images, setImages] = useState<gridImage[]>([]);

  async function fetchImageGrid() {
    try {
      const imgGridResult = await getImageGrid();
      if (imgGridResult.data.resources.length > 0) {
        const imageGrid: gridImage[] = imgGridResult.data.resources
          .map((item: any) => ({
            public_id: item.public_id,
            order: Number(item.context?.custom?.Order) || 0,
            title: item.context?.custom?.caption,
            desc:
              item.context?.custom?.alt ||
              item.context?.custom?.description ||
              "Portfolio image",
          }))
          .sort((a: gridImage, b: gridImage) => a.order - b.order);
        setImages(imageGrid);
      } else {
        setImages([]);
      }
    } catch (err: any) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchImageGrid();
  }, []);

  return (
    <>
      <Header />
      <div className='ImageGrid-container'>
        {images.map((image: gridImage, index) => (
          <AnimatedGridItem
            key={index}
            imageUrl={image.public_id}
            title={image.title}
            desc={image.desc}
            index={index}
          />
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
