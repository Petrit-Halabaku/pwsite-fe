import React from "react";
import {
	CloseIcon,
	Icon,
	SidebarContainer,
	SidebarLink,
	// SidebarWrapper,
	SidebarMenu,
} from "../../UIComponents/sidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<SidebarContainer onClick={toggle} isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			{/* <SidebarWrapper> */}
			<SidebarMenu>
				<SidebarLink to="about">
					About <i></i>
				</SidebarLink>
				<SidebarLink to="portfolio">
					Portfolio <i></i>
				</SidebarLink>
				<SidebarLink to="skills">
					Skills <i></i>
				</SidebarLink>
				<SidebarLink to="contact">
					Contact <i></i>
				</SidebarLink>
			</SidebarMenu>
			{/* </SidebarWrapper> */}
		</SidebarContainer>
	);
};

export default Sidebar;
