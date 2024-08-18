import React from "react";
import { Container } from "../../UIComponents/Container";
import {
	InfoSectionWrapper,
	TopRow,
	Title,
	Desc,
	InfoRow,
	Column1,
	Column2,
	Img,
	ImgContainer,
	InfoTitle,
	InfoP,
} from "../../UIComponents/infoSectionElements";
import { CustomButton } from "../../UIComponents/buttons/CustomButton";

const InfoSection = ({
	id,
	infoTitle,
	headline,
	description,
	buttonLabel,
	buttonBorder,
	imgStart,
	img,
	alt,
	borderRight,
	borderBottom,
	filePath,
}) => {
	return (
		<Container>
			<InfoSectionWrapper id={id}>
				<TopRow>
					<Title>dsssssssssss</Title>
					<Desc>{headline}</Desc>
				</TopRow>
				<InfoRow status={id}>
					<Column1 imgStart={imgStart}>
						<InfoTitle borderRight={borderRight}>{infoTitle}</InfoTitle>
						<InfoP>{headline}</InfoP>
						<InfoP>{description}</InfoP>
						<CustomButton border={+true} id={id} href={filePath} download>
							{buttonLabel}
						</CustomButton>
					</Column1>
					<Column2 imgStart={imgStart}>
						<ImgContainer>
							<Img src={img} alt={alt} />
						</ImgContainer>
					</Column2>
				</InfoRow>
			</InfoSectionWrapper>
		</Container>
	);
};

export default InfoSection;
