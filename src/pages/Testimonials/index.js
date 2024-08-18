import React from "react";
import { testimonialsObj } from "../../helpers/InfoSectionData";
import { TestimonialsWrapper } from "../../UIComponents/testimonialsElements";
import InfoSection from "../InfoSection";

const Testimonials = () => {
	return (
		<TestimonialsWrapper id="testimonials">
			<InfoSection {...testimonialsObj} />
		</TestimonialsWrapper>
	);
};

export default Testimonials;
