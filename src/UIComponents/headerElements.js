import styled from "styled-components";
import { Link as Route } from "react-scroll";

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 130px;
	margin-bottom: 4.5rem;
	${"" /* padding-right: 15px; */}
	${"" /* padding-left: 15px; */}
	${"" /* margin: 0 auto; */}
	${"" /* max-width: 1440px; */}
`;

export const HeaderLogo = styled(Route)`
	${"" /* border:1px solid; */}
	flex: 0.2;
	width: ${({ footer }) => (footer ? "auto" : "100%")};
	height: 100%;
	font-family: var(--handwrite);
	font-size: var(--font-100);
	font-style: italic;
	color: var(--white);
	cursor:pointer;
`;

export const MobileIcons = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 100%);
		font-size: var(--font-26);
		display: block;
		cursor: pointer;
	}
`;
