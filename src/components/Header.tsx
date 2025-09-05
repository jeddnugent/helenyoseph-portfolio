// @ts-expect-error vite image conversion
import headerImage from "../assets/1.jpg?w=768;1280;1920&format=webp&as=srcset";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { motion } from "framer-motion";
import "../styles/Header.css";


function Header() {
	return (
		<>
			<div className="header-container">
				<img
					srcSet={headerImage}
					sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px"
					alt="Header"
					loading="eager"
					width="1920"
					height="900"
				/>
				<div className="text-container">
					<h1>helen</h1>
					<h2>ሄለን</h2>

				</div>
				<div className="bookings-btn__wrapper">
					<a href="#bookings" className="bookings-btn">Bookings</a>

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
		</>
	);

}

export default Header;