import React from "react";
import { Container } from "../../UIComponents/Container";
import {
	SkillsDescription,
	SkillsInfo,
	SkillsTitle,
	SkillsWrapper,
} from "../../UIComponents/skillsElements";
import MyIcons from "../../assets/images/icons";
import {
	Card,
	CardImage,
	CardsGrid,
	CardTitle,
} from "../../UIComponents/cards/CustomCard";

const Skills = () => {
	return (
		<Container>
			<SkillsWrapper id="skills">
				<SkillsInfo>
					<SkillsTitle borderBtm>My Capabilities</SkillsTitle>
					<SkillsDescription>
						These are some skills I've aquired along the years{" "}
					</SkillsDescription>
				</SkillsInfo>
				<CardsGrid status="skills" className="skillsGrid">
					<Card roudedBorder={false} status="skills" as="div">
						<CardImage
							alt="React JS"
							src={MyIcons.ReactIcon}
							status="skills"
							overlayImage={false}
						/>
						<CardTitle status="skills">React JS</CardTitle>
					</Card>
					<Card roudedBorder={false} status="skills" as="div">
						<CardImage
							alt="Node JS"
							src={MyIcons.NodeJSIcon}
							status="skills"
							overlayImage={false}
						/>
						<CardTitle status="skills">Node JS</CardTitle>
					</Card>
					<Card roudedBorder={false} status="skills" as="div">
						<CardImage
							alt="JavaScript"
							src={MyIcons.JSIcon}
							status="skills"
							overlayImage={false}
						/>
						<CardTitle status="skills">JavaScript</CardTitle>
					</Card>
					<Card roudedBorder={false} status="skills" as="div">
						<CardImage
							alt="Mongo DB"
							src={MyIcons.MongoDBIcon}
							status="skills"
							overlayImage={false}
						/>
						<CardTitle status="skills">Mongo DB</CardTitle>
					</Card>
					<Card roudedBorder={false} status="skills" as="div">
						<CardImage
							alt="Express JS"
							src={MyIcons.ExpressIcon}
							status="skills"
							overlayImage={false}
						/>
						<CardTitle status="skills">Express JS</CardTitle>
					</Card>
					<Card roudedBorder={false} status="skills" as="div">
						<CardImage
							alt="Redux js"
							src={MyIcons.ReduxIcon}
							status="skills"
							overlayImage={false}
						/>
						<CardTitle status="skills">Redux js</CardTitle>
					</Card>
					<Card roudedBorder={false} status="skills" as="div">
						<CardImage
							alt="Socket IO"
							src={MyIcons.SocketIcon}
							status="skills"
							overlayImage={false}
						/>
						<CardTitle status="skills">Socket IO</CardTitle>
					</Card>
					<Card roudedBorder={false} status="skills" as="div">
						<CardImage
							alt="JWT"
							src={MyIcons.JwtIcon}
							status="skills"
							overlayImage={false}
						/>
						<CardTitle status="skills">JWT</CardTitle>
					</Card>
					<Card roudedBorder={false} status="skills" as="div">
						<CardImage
							alt="HTML 5"
							src={MyIcons.HtmlIcon}
							status="skills"
							overlayImage={false}
						/>
						<CardTitle status="skills">HTML 5</CardTitle>
					</Card>
					<Card roudedBorder={false} status="skills" as="div">
						<CardImage
							alt="CSS 3"
							src={MyIcons.CssIcon}
							status="skills"
							overlayImage={false}
						/>
						<CardTitle status="skills">CSS 3</CardTitle>
					</Card>
					<Card roudedBorder={false} status="skills" as="div">
						<CardImage
							alt="GIT"
							src={MyIcons.GitIcon}
							status="skills"
							overlayImage={false}
						/>
						<CardTitle status="skills">GIT</CardTitle>
					</Card>
				</CardsGrid>
			</SkillsWrapper>
		</Container>
	);
};

export default Skills;
