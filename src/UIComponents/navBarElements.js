import styled from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const Nav = styled.ul`
	${"" /* border: 1px solid; */}
	display: flex;
	flex: 0.6;
	justify-content: flex-end;
	width: 100%;
	height: 130px;
	padding-bottom: 0.5rem;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	${"" /* border: 1px solid red; */}
	position: relative;
	width: 15%;
	height: 100%;
	list-style-type: none;
	cursor:pointer;
`;

export const NavLink = styled(LinkScroll)`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	width: 100%;
	height: 100%;
	font-size: var(--font-22);
	font-weight: var(--medium);
	transition: all 0.3s ease-in;
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

	&.active {
		background-color: var(--primaryRed);
	}
	span {
		padding-bottom: 0.5rem;
	}
`;
