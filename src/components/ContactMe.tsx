// import ContactImage from "../assets/concert_shot_12.png";
import "../styles/ContactMe.css";
import instagramLogo from "../assets/instagram_logo.png";

function ContactMe() {
	return (
		<>
			<div className="contactme-container">
				<div className="contactme-text-container">
					<h2>📍 Denver, Colorado </h2>
					<a href="mailto:helenayoseph87@gmail.com" target="_blank" rel="noopener noreferrer">
						<h2>Bookings: helenayoseph87@gmail.com</h2>
					</a>
					<div className="social-container">
						<img src={instagramLogo} />
						<a href="https://www.instagram.com/helentigest/" target="_blank" rel="noopener noreferrer">
							<h2>helentigest</h2>
						</a>
					</div>
				</div>
			</div>
		</>
	);

}

export default ContactMe;