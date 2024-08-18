import React from "react";
// import styled from "styled-components";
// import { Container } from "../../UIComponents/Container";
import {
	DataSection,
	FooterLink,
	FooterWrapper,
	Links,
	PersonalData,
	Place,
	PhoneNumber,
	Email,
	Copyright,
} from "../../UIComponents/footerElements";
import { HeaderLogo } from "../../UIComponents/headerElements";
import {
	Facebook,
	Github,
	Linkedin,
	SocialLink,
	SocialWrapper,
} from "../../UIComponents/homeElements";

const Footer = () => {
	return (
		<FooterWrapper>
			<HeaderLogo
				footer="true"
				to="home"
				smooth={true}
				duration={500}
				spy={true}
				exact="true"
				offset={0}
			>
				Portfolio
			</HeaderLogo>
			<DataSection>
				<Links>
					<FooterLink
						to="about"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={0}
					>
						About
					</FooterLink>
					<i>|</i>
					<FooterLink
						to="portfolio"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={0}
					>
						Portfolio
					</FooterLink>
					<i>|</i>
					<FooterLink
						to="skills"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={0}
					>
						Skills
					</FooterLink>
					<i>|</i>
					<FooterLink
						to="contact"
						smooth={true}
						duration={500}
						spy={true}
						exact="true"
						offset={0}
					>
						Contact
					</FooterLink>
				</Links>
				<PersonalData>
					<Place>XK</Place>
					<i>|</i>
					<PhoneNumber href="tel:+38345477388">+38345477388</PhoneNumber>
					<i>|</i>
					<Email href="mailto:petritbhalabaku@gmail.com">
						petritbhalabaku@gmail.com
					</Email>
				</PersonalData>
			</DataSection>
			<SocialWrapper>
				<SocialLink href="#linkedin" target="_blank">
					<Linkedin title="social" />
				</SocialLink>
				<SocialLink href="#github" target="_blank">
					<Github title="social" />
				</SocialLink>
				<SocialLink href="#facebook" target="_blank">
					<Facebook title="social" />
				</SocialLink>
			</SocialWrapper>
			<Copyright>&#169; 2021 &#928;ti</Copyright>
		</FooterWrapper>
	);
};

export default Footer;
