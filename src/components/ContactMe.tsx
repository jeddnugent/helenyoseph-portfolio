import "../styles/ContactMe.css";
import InstagramIcon from '@mui/icons-material/Instagram';


function ContactMe() {
	return (
		<>
			<div className="contactme__container">
				<div className="contactme__text-container">
					<h2>Denver, Colorado</h2>
				</div>
				<div className="contactme__button-stack">
					<a href="mailto:helenayoseph87@gmail.com" target="_blank" className="contactme__bookings-btn">Bookings</a>
					<a href="https://www.instagram.com/helentigest/" target="_blank" rel="noopener noreferrer" className="contactme__instagram-wrapper">
						<InstagramIcon className="contactme__instagram" />
					</a>
				</div>
			</div>
		</>
	);

}

export default ContactMe;