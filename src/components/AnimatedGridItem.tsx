import { useRef } from "react";
import FolioImage from "./FolioImage";

export default function AnimatedGridItem({ imageUrl, index }: { imageUrl: string; index: number }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

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
