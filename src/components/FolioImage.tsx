import "../styles/FolioImage.css";

function FolioImage(props: {
	imageURL: string;
	altText: string;
}) {
	return (
		<div className="folio-img">
			<img
				srcSet={props.imageURL}
				sizes="(max-width: 768px) 768px, (max-width: 1280px) 1280px, 1920px"
				alt={props.altText}
				loading="lazy"
			/>
		</div>
	);
}

export default FolioImage;