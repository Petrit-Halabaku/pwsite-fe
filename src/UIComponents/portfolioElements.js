import styled from "styled-components";
// import { Link as Route } from "react-scroll";

export const PortfolioWrapper = styled.div`
	background: var(--primaryDarkerBg);
	padding-top: 14rem;
`;

export const PortfolioTopSection = styled.div`
	display: flex;
`;
export const Carets = styled.div`
	flex: 0.5;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const Caret = styled.button`
	font-size: var(--font-30);
	color: var(--white);
	width: 6rem;
	height: 6rem;
	border-radius: 50%;
	background: transparent;
	cursor: pointer;
	border: 2px solid var(--white);
	padding: 1rem 0rem;
	margin: 0 1rem;
	outline: none;
	&:hover,
	&:focus {
		background: var(--primaryRed);
		border-color: var(--primaryRed);
	}
`;
export const FilterTags = styled.div`
	display: flex;
	flex: 1;
	margin-bottom: 7rem;
`;
export const Tag = styled.button`
	font-size: var(--font-30);
	font-weight: var(--light);
	color: var(--white);
	background: transparent;
	cursor: pointer;
	border: none;
	padding: 1rem 2rem;
	outline: none;
	&:hover,
	&:focus {
		color: var(--primaryRed);
	}

	&:nth-of-type(1) {
		padding-left: 0;
	}
`;
export const PortfolioTitle = styled.p`
	position: relative;
	flex: 0.5;
	font-size: var(--font-50);
	font-weight: var(--light);
	&::after {
		content: "";
		position: absolute;
		background: red;
		left: 25rem;
		top: 50%;
		height: 3px;
		width: 40%;
	}
`;

/* ---------------------------------- CARD GRID ---------------------------------- */

// export const CardsGrid = styled.div`
// 	${
// 		"" /* display: flex;
// 	flex-wrap: wrap;
// 	justify-content: space-between; */
// 	}
// 	display: grid;
// 	grid-template-columns: repeat(4, 1fr);
// 	grid-gap: 5rem;
// `;
export const CardOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 40px;
	background: var(--primaryRed);
	opacity: 0;
	visibility: hidden;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	transition: opacity 0.1s, visibility 0.2s;
`;
export const CardTitle = styled.p`
	font-size: var(--font-40);
	font-weight: var(--semiBold);
	padding: 0 0 0 3rem;
	transition: 0.2s;
	transform: translateY(1em);
`;
export const CardDescription = styled.p`
	font-size: var(--font-25);
	font-weight: var(--light);
	padding: 0 3rem 0;
	margin-bottom: 2rem;
	transition: 0.2s;
	transform: translateY(1em);
`;
export const Card = styled.a`
	position: relative;
	flex: 0 23%;
	height: 500px;
	border-radius: 40px;
	margin-bottom: 3%;
	z-index: 999;
	transition: 0.2s;
	${"" /* transform: scaleY(1.1); */}

	&:hover {
		${"" /* transform: scaleY(1.1); */}
	}
	&:hover ${CardOverlay} {
		opacity: 0.7;
		visibility: visible;
	}
	&:hover ${CardTitle}, &:hover ${CardDescription} {
		transform: translateY(0);
	}
`;
export const CardImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 40px;
`;
