import "../styles/ContactMe.css";
import InstagramIcon from '@mui/icons-material/Instagram';


function ContactMe() {
	return (
		<>
			<div className="contactme__container">
				<div className="contactme__text-container">
					<h2>📍 Denver, Colorado </h2>
					<a href="mailto:helenayoseph87@gmail.com" target="_blank" rel="noopener noreferrer">
						<h2>Bookings: helenayoseph87@gmail.com</h2>
					</a>
					<div className="social-container">
						<InstagramIcon className="contactme__instagram" />
						<a href="https://www.instagram.com/helentigest/" target="_blank" rel="noopener noreferrer">
							<h2 id="bookings">helentigest</h2>

						</a>
					</div>
				</div>
			</div>
		</>
	);

}

export default ContactMe;