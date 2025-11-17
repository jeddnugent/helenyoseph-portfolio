import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
import { quality, format } from "@cloudinary/url-gen/actions/delivery";
import { scale } from "@cloudinary/url-gen/actions/resize";

import "../styles/FolioImage.css";

export default function AnimatedGridItem({
  imageUrl,
  index,
  title,
  desc,
}: {
  imageUrl: string;
  index: number;
  title: string;
  desc: string;
}) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dmy1rz6fh",
    },
  });

  const [showOverlay, setShowOverlay] = useState(false);

  const ref = useRef(null);

  const margin =
    typeof window !== "undefined" && window.innerWidth < 600
      ? "0px 0px -150px 0px" // Mobile Offset
      : "0px 0px -150px 0px"; //Laptop Offset

  const isInView = useInView(ref, { once: true, margin });

  const image = cld
    .image(imageUrl)
    .resize(scale().width(1200))
    .delivery(format("auto"))
    .delivery(quality("auto"));

  function handleDisplyText() {
    console.log("clicked");
    setShowOverlay(!showOverlay);
  }
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 2, delay: (index % 3) * 0.1 }}
    >
      <div
        className="folio-img"
        onClick={handleDisplyText}
        // onMouseEnter={handleDisplyText}
      >
        <AdvancedImage cldImg={image} alt={desc} className="banner-img" />
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="folio-img-overlay__container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h2>{title}</h2>
              <p>{desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
