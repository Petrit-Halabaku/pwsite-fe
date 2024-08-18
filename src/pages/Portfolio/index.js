import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "../../UIComponents/Container";

import {
	Carets,
	FilterTags,
	PortfolioTitle,
	PortfolioTopSection,
	PortfolioWrapper,
	Caret,
	Tag,
} from "../../UIComponents/portfolioElements";
import {
	CardsGrid,
	Card,
	CardImage,
	CardOverlay,
	CardTitle,
	CardDescription,
} from "../../UIComponents/cards/CustomCard";

const Portfolio = ({ cards }) => {
	console.log(cards);
	return (
		<PortfolioWrapper id="portfolio">
			<Container>
				<PortfolioTopSection>
					<PortfolioTitle> Portfolio </PortfolioTitle>
					<Carets>
						<Caret>
							<FontAwesomeIcon icon="angle-left" />
						</Caret>
						<Caret>
							<FontAwesomeIcon icon="angle-right" />
						</Caret>
					</Carets>
				</PortfolioTopSection>
				<FilterTags>
					<Tag> All </Tag> <Tag> Front End </Tag> <Tag> Back End </Tag>
					<Tag> Full Stack </Tag>
				</FilterTags>
				<CardsGrid status="portfolio" className="skillGrid">
					{cards.map((card) => (
						<Card
							key={card.id}
							href={card.linkToProject}
							target={card.target}
							roundedBorder={card.roundedBorder}
							status={card.status}
							overlayImage={card.overlayImage}
						>
							<CardImage
								fullHeight={card.fullHeight}
								src={card.cardImage}
							/>
							<CardOverlay
								show={card.show}
								roundedBorder={card.roundedBorder}
							>
								<CardTitle portfolio={card.portfolio}>
									{card.cardTitle}
								</CardTitle>
								<CardDescription portfolio={card.portfolio}>
									{card.cardDescription}
								</CardDescription>
							</CardOverlay>
						</Card>
					))}
				</CardsGrid>
			</Container>
		</PortfolioWrapper>
	);
};

export default Portfolio;

// const [cards, setCards] = useState([]);

// useEffect(() => {
// 	async function fetchCards() {
// 		const res = await cardsData.get("/db.json");
// 		console.log(
// 			"❌❌ -> file: index.js -> line 33 -> fetchCards -> res",
// 			res
// 		);
// 		setCards(res.data.cards);
// 	}

// 	fetchCards();
// }, []);
// console.log(
// 	"❌❌ -> file: index.js -> line 29 -> Portfolio -> cards",
// 	cards
// );
