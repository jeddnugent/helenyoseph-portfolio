import "../styles/FolioImage.css";

function FolioImage(props: {
	imageURL: string;
	altText: string;
}) {
	return (
		<div className="folio-img">
			<img loading="lazy" src={props.imageURL} alt={props.altText} />
		</div>
	);
}

export default FolioImage;