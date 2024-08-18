import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

export const SidebarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background-color: #0d0d0d;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;
	transition: 0.3s ease-in-out;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
	color: var(--white);
`;

export const Icon = styled.div`
	position: absolute;
	top: 2rem;
	right: 2rem;
	background: transparent;
	cursor: pointer;
	outline: none;
	font-size: var(--biggerFontSize);
`;

//Sidebar Menu
export const SidebarWrapper = styled.div`
	color: var(--white);
`;

export const SidebarMenu = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 30%;
	height: 50%;
`;
export const SidebarLink = styled(LinkScroll)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: 0.3s ease-in-out;
	${"" /* background:red; */}
	height:100%;
	width: 100%;

	&:hover::after,
	&:active::after {
		content: "";
		position: absolute;
		left: 0;
		top: calc(100% + 1rem);
		width: 100%;
		height: 1px;
		background-color: var(--primaryRed);
		transition: all 0.3s ease-in;
	}
`;
