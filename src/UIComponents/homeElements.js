import styled from "styled-components";
import { Link as Route } from "react-scroll";
import { FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";

export const HomeWrapper = styled.div`
	display: flex;
	${"" /* height: 100vh; */}
	width: 100%;
	justify-content: space-between;
	margin-top: var(--font-130);
`;

export const HomeInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex: 0.5;
	line-height: 1.1;
`;

export const HomeTopName = styled.p`
	font-size: var(--font-30);
`;

export const HomeBigName = styled.span`
	font-size: var(--font-100);
	font-weight: var(--bold);
	${"" /* line-height: 0.9; */}
`;

export const HomeDesc = styled.p`
	font-size: var(--font-22);
	font-weight: var(--light);
`;

export const HomeRedTex = styled.span`
	color: var(--primaryRed);
	font-size: var(--biggerFontSize);
	text-decoration: uppercase;
`;

export const HomeSocial = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 3rem 0;
`;
export const HomeImage = styled.div`
	flex: 0.4;
	height: 100%;
`;

export const HomeBtnWrapper = styled.div`
	flex-direction: row;
	width: 100%;
	margin: 1rem 0;
`;

export const SocialP = styled.p`
	font-size: var(--font-22);
	margin: 1rem 0;
`;

export const SocialWrapper = styled.div`
	display: flex;
`;

export const SocialLink = styled.a`
	font-size: var(--font-40);
	color: var(--white);
	padding: 0.75rem 2rem;

	&:first-child {
		padding-left: 0;
	}
`;

export const Image = styled.img`
	width: 100%;
	${"" /* height: 100%; */}
`;
export const Linkedin = styled(FiLinkedin)``;
export const Facebook = styled(FiFacebook)``;
export const Github = styled(FiGithub)``;

export const HomeBtn = styled(Route)`
	width: 35%;
	${"" /* height: 100%; */}
	display: inline-block;
	text-align: center;
	background: ${({ primary }) =>
		primary ? "var(--primaryRed)" : "transparent"};
	color: var(--white);
	font-size: var(--font-30);
	font-weight: var(--light);
	padding: 2.5rem 0;
	border-radius: 50px;
	outline: none;
	border: ${({ border }) => (border ? "1px solid var(--white)" : "none")};
	cursor: pointer;
	margin-right: 1rem;
	&:hover {
		box-shadow: ${({ primary }) =>
			primary
				? "inset 0px 0px 20px -10px var(--primaryRedHover)"
				: "inset 0px 0px 20px -10px #ccc"};
	}
`;
