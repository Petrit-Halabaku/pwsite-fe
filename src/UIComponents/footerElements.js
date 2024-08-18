import styled from "styled-components";
import { Link } from "react-scroll";

export const FooterWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: var(--primaryDarkerBg);
	padding-top: 10rem;
	&::before {
		position: absolute;
		content: "";
		height: 8rem;
		width: 3px;
		top: 0;
		left: 50%;
		background: var(--primaryRed);
	}
`;
export const DataSection = styled.div`
	font-size: var(--font-20);
	font-weight: var(--medium);
	${"" /* border:1px solid; */}
	flex:0 50%;
	padding: 4.5rem 0;
`;
export const Links = styled.div`
	position: relative;
	display: flex;
	justify-content: space-around;
`;
export const PersonalData = styled.div`
	display: flex;
	padding: 1rem 0;
`;
export const PhoneNumber = styled.a`
	padding: 0 1rem;
`;
export const Place = styled.p`
	padding: 0 1rem;
`;
export const Email = styled.a`
	padding: 0 1rem;
`;
export const FooterLink = styled(Link)`
	text-align: center;
	padding: 0 2rem;
	flex: 0.25;
	cursor:pointer;
`;
export const Copyright = styled.span`
	font-size: var(--font-20);
	text-transform: uppercase;
   margin-top:5rem;
`;
