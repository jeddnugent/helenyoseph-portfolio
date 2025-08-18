// import ContactImage from "../assets/concert_shot_12.png";
import "../styles/ContactMe.css";
import instagramLogo from "../assets/instagram_logo.png";

function ContactMe() {
	return (
		<>
			<div className="contactme-container">
				<div className="contactme-text-container">
					<h1>Please reach out for booking information: </h1>
					<a href="mailto:helenyoseph@gmail.com" target="_blank" rel="noopener noreferrer">
						<h2>helenyoseph@gmail.com</h2>
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