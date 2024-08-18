import React from "react";
import {
	HomeBigName,
	// HomeBtn,
	HomeWrapper,
	HomeDesc,
	HomeImage,
	HomeInfo,
	HomeRedTex,
	HomeSocial,
	HomeTopName,
	Image,
	Linkedin,
	Facebook,
	Github,
	SocialLink,
	SocialP,
	SocialWrapper,
	HomeBtnWrapper,
} from "../../UIComponents/homeElements";
import { CustomButtonRoute } from "../../UIComponents/buttons/CustomButton";
import MyIcons from "../../assets/images/icons";
import { Container } from "../../UIComponents/Container";

const Home = () => {
	return (
		<Container>
			<HomeWrapper id="home">
				<HomeInfo>
					<HomeTopName>Hello, I am</HomeTopName>
					<HomeBigName>Petrit </HomeBigName>
					<HomeBigName>Halabaku </HomeBigName>
					<HomeDesc>
						A young <HomeRedTex>fullStack Developer</HomeRedTex> with a
						big love for code.{" "}
					</HomeDesc>
					<HomeSocial>
						<SocialP>Find Me on</SocialP>
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
					</HomeSocial>
					<HomeBtnWrapper>
						<CustomButtonRoute to="contact" primary={+true}>
							Hire me
						</CustomButtonRoute>
						<CustomButtonRoute
							to="/downloadCv"
							border="true"
							download="logo.jpg"
						>
							Portfolio
						</CustomButtonRoute>
					</HomeBtnWrapper>
				</HomeInfo>
				<HomeImage>
					<Image src={MyIcons.HomeIcon} title="home" />
				</HomeImage>
			</HomeWrapper>
		</Container>
	);
};

export default Home;
