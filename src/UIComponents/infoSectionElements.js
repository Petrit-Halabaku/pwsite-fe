import styled from "styled-components";

export const InfoSectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 10rem;
`;

export const TopRow = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: red;
`;
export const Title = styled.p`
	display: none;
	position: relative;
	font-size: var(--font-60);
	font-weight: var(--semiBold);
	padding: 1rem;
	&::after {
		content: "";
		position: absolute;
		width: 50%;
		height: 2px;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		background: var(--primaryRed);
	}
`;
export const Desc = styled.p`
	display: none;
	font-size: var(--font-30);
	font-weight: var(--light);
	text-align: center;
	margin-top: 3rem;
`;
export const Column1 = styled.div`
	flex: ${({ imgStart }) => (imgStart ? "0 40%" : "0.4")};
	display: flex;
	flex-direction: column;
	order: ${({ imgStart }) => (imgStart ? "2" : "1")};
	${"" /* order:2; */}
	padding-top: 10rem;
`;
export const Column2 = styled.div`
	flex: ${({ imgStart }) => (imgStart ? "0 40%" : "0.4")};
	${"" /* border: 1px solid cyan; */}
	display: flex;
	justify-content: ${({ imgStart }) => (imgStart ? "flex-start" : "flex-end")};
	align-items: center;
	order: ${({ imgStart }) => (imgStart ? "1" : "2")};
	${({ imgStart }) =>
		imgStart &&
		`
		${ImgContainer}{
			width:100%;
			background:inherit;
		}
	`}
`;

export const InfoRow = styled.div`
	display: flex;
	${
		"" /* justify-content: ${({ status }) =>
		status === "about" ? "" : ""}; */
	}
	justify-content:space-between;
`;
export const ImgContainer = styled.div`
	width: 80%;
	${"" /* border: 1px solid red; */}
	padding: 5rem;
	background: var(--primaryDarkBg);
`;
export const ImgWrapper = styled.div`
	text-align: center;
`;
export const Img = styled.img`
	${"" /* width: 100%; */}
	width: 100%;
	margin: 0 auto;
`;

export const InfoTitle = styled.p`
	position: relative;
	font-size: var(--font-60);
	font-weight: var(--semiBold);
	margin-bottom: 3rem;
	${({ borderRight }) =>
		borderRight &&
		`
	&::after {
		content: "";
		position: absolute;
		background: red;
		right: -20%;
		top: 50%;
		height: 3px;
		width: 40%;
	}
	`}
`;
export const InfoP = styled.p`
	font-size: var(--font-24);
	font-weight: var(--light);
	margin: 3rem 0;
	line-height: 2;
`;
export const InfoButton = styled.p``;
