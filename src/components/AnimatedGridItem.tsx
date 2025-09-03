import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FolioImage from "./FolioImage";

export default function AnimatedGridItem({ imageUrl, index }: { imageUrl: string; index: number }) {
	const ref = useRef(null);

	const margin = typeof window !== "undefined" && window.innerWidth < 600
		? "0px 0px -100px 0px"
		: "0px 0px -150px 0px";

	const isInView = useInView(ref, { once: true, margin });

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 50 }}
			animate={isInView ? { opacity: 1, y: 0 } : {}}
			transition={{ duration: 1.5, delay: index * 0.05 }}
		>
			<FolioImage imageURL={imageUrl} altText="" />
		</motion.div>
	);
}
