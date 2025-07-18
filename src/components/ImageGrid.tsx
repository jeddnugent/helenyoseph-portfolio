import FolioImage from "./FolioImage";
import "../styles/ImageGrid.css";

function ImageGrid(props: {
	imageOneUrl: string;
	imageTwoUrl: string;
	imageThreeUrl: string;
	imageFourUrl: string;
	imageFiveUrl: string;
	imageSixUrl: string;
	imageSevenUrl: string;
	imageEightUrl: string;
	imageNineUrl: string;

}) {
	return (
		<div className="ImageGrid-container">
			<FolioImage imageURL={props.imageOneUrl} altText="" />
			<FolioImage imageURL={props.imageTwoUrl} altText="" />
			<FolioImage imageURL={props.imageThreeUrl} altText="" />
			<FolioImage imageURL={props.imageFourUrl} altText="" />
			<FolioImage imageURL={props.imageFiveUrl} altText="" />
			<FolioImage imageURL={props.imageSixUrl} altText="" />
			<FolioImage imageURL={props.imageSevenUrl} altText="" />
			<FolioImage imageURL={props.imageEightUrl} altText="" />
			<FolioImage imageURL={props.imageNineUrl} altText="" />
		</div>
	);
}

export default ImageGrid;