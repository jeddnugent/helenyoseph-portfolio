import axios from "axios";

export const getBannerImage = () =>
	axios.get(`https://res.cloudinary.com/dmy1rz6fh/image/list/banner.json?context=true`);

export const getImageGrid = () =>
	axios.get(`https://res.cloudinary.com/dmy1rz6fh/image/list/image_grid.json?context=true`);