import testimonialsImg from "../assets/images/testimonialsImg.png";
import aboutImg from "../assets/images/aboutImg.png";
export const aboutMeObj = {
	id: "about",
	infoTitle: "About Me",
	headline: "My name is Petrit Halabaku and this is my story.",
	description:
		"dignissimos blanditiis aperiam tempore iusto inventore et laboriosam impedit eveniet error nemo velit itaque consectetur ad explicabo nobis quo alias!",
	buttonLabel: "Download CV",
	buttonBorder: true,
	imgStart: false,
	img: aboutImg,
	// img: testimonialsImg,
	alt: "About Me",
	borderRight: true,
	filePath:"../assets/files/CV_Petrit_Halabaku.pdf"
};

export const testimonialsObj = {
	id: "testimonials",
	infoTitle: "What My Clients Says",
	headline:
		"dignissimos blanditiis aperiam tempore iusto inventore et laboriosam impedit eveniet error nemo velit itaque consectetur ad explicabo nobis quo alias!",
	description:
		"dignissimos blanditiis aperiam tempore iusto inventore et laboriosam impedit eveniet error nemo velit itaque consectetur ad explicabo nobis quo alias!",
	buttonLabel: false,
	// buttonBorder: true,
	imgStart: true,
	img: testimonialsImg,
	alt: "Testimonials",
	borderBottom: true,
};
