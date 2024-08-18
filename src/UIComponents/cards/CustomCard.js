import styled, { css } from "styled-components";

export const CustomCard = styled.div``;

export const CardsGrid = styled.div`
	display: grid;
	${"" /* flex-wrap: wrap; */}
	grid-template-columns: ${({ status }) =>
		status === "portfolio" ? "repeat(5, 1fr)" : "repeat(auto-fit, 140px)"};
	grid-gap: 2rem;
	${"" /* justify-content: center; */}
	justify-content:center;
	padding: 3rem 0;
`;
export const CardOverlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: var(--primaryRed);
	opacity: 0;
	visibility: hidden;
	display: ${({ show }) => (show ? "flex" : "none")};
	border-radius: ${({ roundedBorder }) => (roundedBorder ? "40px" : "0")};
	flex-direction: column;
	justify-content: flex-end;
	transition: opacity 0.1s, visibility 0.1s;
`;

export const CardTitle = styled.p`
	display: ${({ status }) => (status === "skills" ? "none" : "")};
	position: relative;
	font-size: var(--font-30);
	font-weight: var(--semiBold);
	padding: ${({ portfolio }) => (portfolio ? "0 3rem 0" : "0")};
	transition: 0.2s;
	transform: ${({ portfolio }) => (portfolio ? "translateY(2rem)" : "none")};
	text-align: ${({ portfolio }) => (portfolio ? "left" : "none")}
		${({ borderBtm }) =>
			borderBtm &&
			`
   &::after {
		content: "";
		position: absolute;
		background: red;
		left: 50%;
      transform:translateX(-50%);
		bottom: 0;
		height: 3px;
		width: 50%;
	}
   `};
`;

export const CardDescription = styled.p`
	font-size: var(--font-20);
	font-weight: var(--light);
	padding: ${({ portfolio }) => (portfolio ? "0 3rem 0" : "2rem 1rem 0")};
	margin-bottom: ${({ portfolio }) => (portfolio ? "2rem" : "0")};
	transition: 0.2s;
	transform: ${({ portfolio }) => (portfolio ? "translateY(1rem)" : "none")};
	text-align: ${({ portfolio }) => (portfolio ? "left" : "none")};
`;

// "as" polymorphic prop when implemented
export const Card = styled.a`
	position: relative;
	display: flex;
	height: ${({ status }) => (status === "portfolio" ? "300px" : "auto")};
	border-radius: ${({ roudedBorder }) => (roudedBorder ? "40px" : "0")};
	margin-bottom: 3%;
	z-index: 10;
	${"" /* transition: 0.2s; */}
	text-align: center;

	${({ status }) =>
		status === "portfolio" &&
		css`
			${CardImage} {
				border-radius: 40px;
			}
			&:hover {
				${CardOverlay} {
					opacity: 0.7;
					visibility: visible;
				}
				${CardTitle} {
					transform: translateY(0);
				}
				${CardDescription} {
					transform: translateY(0);
				}
			}
		`};
`;
export const CardImage = styled.img`
	width: ${({ status }) => (status === "skills" ? "50%" : "100%")};
	height: ${({ fullHeight }) => (fullHeight === true ? "100%" : "auto")};
	object-fit: cover;
	${"" /* border-radius: 40px; */}
`;
