import headerImage from "../assets/concert_shot_4.jpg";
import "../styles/Header.css";

function Header() {
	return (
		<>
			<div className="container">
				<img className="header-image" src={headerImage} alt="Logo" />
				<div className="text-container">
					<h1>Helen Yoseph</h1>
					<h2>ሄለን</h2>
				</div>
			</div>
		</>
	);

}

export default Header;