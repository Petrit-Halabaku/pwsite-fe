import styled from "styled-components";
import { Link as Route } from "react-scroll";

export const CustomButtonRoute = styled(Route)`
	width: 35%;
	height: auto;
	display: ${({ id }) => (id !== "testimonials" ? "inline-block" : "none")};
	text-align: center;
	background: ${({ primary }) =>
		primary ? "var(--primaryRed)" : "transparent"};
	color: var(--white);
	font-size: var(--font-30);
	font-weight: ${({ contact }) =>
		contact ? "var(--regular)" : "var(--light)"};
	padding: ${({ contact }) => (contact ? " 2rem 0" : "2.5rem 0")};
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
export const CustomButton = styled.a`
	width: 35%;
	height: auto;
	display: ${({ id }) => (id !== "testimonials" ? "inline-block" : "none")};
	text-align: center;
	background: ${({ primary }) =>
		primary ? "var(--primaryRed)" : "transparent"};
	color: var(--white);
	font-size: var(--font-30);
	font-weight: ${({ contact }) =>
		contact ? "var(--regular)" : "var(--light)"};
	padding: ${({ contact }) => (contact ? " 2rem 0" : "2.5rem 0")};
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
