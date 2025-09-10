import { motion } from "framer-motion";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';
import { quality, format } from "@cloudinary/url-gen/actions/delivery";

import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import "../styles/Header.css";

function Header() {
	const cld = new Cloudinary({
		cloud: {
			cloudName: "dmy1rz6fh"
		}
	});

	const img = cld
		.image("banner")
		.delivery(format("auto"))
		.delivery(quality("auto"));

	return (
		<>
			<div className="header-container">
				<AdvancedImage
					cldImg={img}
					className={"header-img"}
				/>
				<div className="text-container">
					<h2>ሄ</h2>
					<h2>ለ</h2>
					<h2>ን</h2>
				</div>
				<div className="bookings-btn__wrapper">
					<a href="mailto:helenayoseph87@gmail.com" target="_blank" className="bookings-btn">Bookings</a>
					<div className="header__arrow-wrapper">
						<motion.div
							animate={{ y: [0, 4, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						>
							<KeyboardDoubleArrowDownIcon className="header__arrow-down" />
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);

}

export default Header;