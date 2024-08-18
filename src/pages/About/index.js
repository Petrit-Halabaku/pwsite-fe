import React from "react";
import { AboutWrapper } from "../../UIComponents/aboutElements";
// import { Container } from "../../UIComponents/Container";
import { aboutMeObj } from "../../helpers/InfoSectionData";
import InfoSection from "../InfoSection";

const AboutMe = () => {
	return (
		<AboutWrapper id="about">
			<InfoSection {...aboutMeObj}/>
		</AboutWrapper>
	);
};

export default AboutMe;
