import styled from "styled-components";

export const SkillsWrapper = styled.div`
	padding: 4rem;
`;
export const SkillsInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 6rem 0;
`;
export const SkillsTitle = styled.p`
	position: relative;
	font-size: var(--font-60);
	font-weight: var(--semiBold);
	transition: 0.2s;
	transform: none;
	margin-bottom: 2rem;
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
export const SkillsDescription = styled.p`
	font-size: var(--font-30);
	font-weight: var(--light);
	padding: 0 3rem 0;
	margin-bottom: 2rem;
`;
