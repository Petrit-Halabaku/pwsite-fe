import styled from "styled-components";

export const ContactWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const ContactInfoRow = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 20rem;
	&::before {
		position: absolute;
		content: "";
		height: 15rem;
		width: 3px;
		top: 0;
		left: 50%;
		background: var(--primaryRed);
	}
`;
export const InfoTitle = styled.p`
	font-size: var(--font-60);
	font-weight: var(--semiBold);
	width: 70%;
	text-align: center;
	line-height: 1;
`;
export const InfoDescription = styled.p`
	font-size: var(--font-20);
	font-weight: var(--semiBold);
	margin: 2rem 0;
`;
export const ContactFormRow = styled.form`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 20rem;
`;
export const Row1 = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;
export const Row2 = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	${"" /* margin: 5rem; */}
`;
export const Row3 = styled.div`
	width: 100%;
	display: flex;
`;
export const InputText = styled.input`
	flex: 0.5;
	margin: 2rem;
	padding: 1rem;
	font-size: var(--font-25);
	border: none;
	outline: none;
`;
export const InputMessage = styled.textarea`
	width: 100%;
	margin: 2rem;
	padding: 1rem;
	font-size: var(--font-25);
	resize: none;
	border: none;
	outline: none;
`;
