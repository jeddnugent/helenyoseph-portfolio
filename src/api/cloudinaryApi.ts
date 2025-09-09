import axios from "axios";

export const getBannerImage = () =>
	axios.get(`https://res.cloudinary.com/dmy1rz6fh/image/list/banner.json`);

export const getImageGrid = () =>
	axios.get(`https://res.cloudinary.com/dmy1rz6fh/image/list/image_grid.json`);