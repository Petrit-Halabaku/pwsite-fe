import React, { useState } from "react";
import {
	HeaderLogo,
	HeaderWrapper,
	MobileIcons,
} from "../../UIComponents/headerElements";
import NavBar from "../NavBar";
import { FaBars } from "react-icons/fa/";
import Sidebar from "../Sidebar";
import { Container } from "../../UIComponents/Container";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<Container>
			<HeaderWrapper id="home">
				<HeaderLogo
					to="home"
					smooth={true}
					duration={500}
					spy={true}
					exact={+true}
					offset={0}
				>
					Portfolio
				</HeaderLogo>
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<MobileIcons onClick={toggle}>
					<FaBars />
				</MobileIcons>
				<NavBar />
			</HeaderWrapper>
		</Container>
	);
};

export default Header;
