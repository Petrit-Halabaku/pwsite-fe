import React from "react";
import { Nav, NavItem, NavLink } from "../../UIComponents/navBarElements";

const NavBar = () => {
	return (
		<Nav>
			<NavItem>
				<NavLink
					to="about"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					offset={0}
				>
					<span>About</span> <i></i>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					to="portfolio"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					offset={0}
				>
					<span>Portfolio</span> <i></i>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					to="skills"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					offset={0}
				>
					<span>Skills</span> <i></i>
				</NavLink>
			</NavItem>
			<NavItem>
				<NavLink
					to="contact"
					smooth={true}
					duration={500}
					spy={true}
					exact="true"
					offset={0}
				>
					<span>Contact</span> <i></i>
				</NavLink>
			</NavItem>
		</Nav>
	);
};

export default NavBar;
