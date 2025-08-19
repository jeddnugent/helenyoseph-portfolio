import headerImage from "../assets/crowd_full.jpg";
import "../styles/Header.css";

function Header() {
	return (
		<>
			<div className="header-container">
				<img src={headerImage} alt="Logo" />
				<div className="text-container">
					<h1>helen | ሄለን</h1>
					<h2>📍colorado</h2>
				</div>
			</div>
		</>
	);

}

export default Header;