import React from "react";
import { CustomButton } from "../../UIComponents/buttons/CustomButton";
import {
	ContactFormRow,
	ContactInfoRow,
	ContactWrapper,
	InfoDescription,
	InfoTitle,
	InputMessage,
	InputText,
	Row1,
	Row2,
	Row3,
} from "../../UIComponents/contactElements";
import { Container } from "../../UIComponents/Container";

const Contact = () => {
	return (
		<Container>
			<ContactWrapper id="contact">
				<ContactInfoRow>
					<InfoTitle>Let's Make Something Great Together</InfoTitle>
					<InfoDescription>You Think it, I'll Make It.</InfoDescription>
				</ContactInfoRow>
				<ContactFormRow>
					<Row1>
						<InputText placeholder="Name" />
						<InputText placeholder="Email" type="email" />
					</Row1>
					<Row2>
						<InputText placeholder="#Phone" type="phone" />
						<InputText placeholder="Budget" />
					</Row2>
					<Row3>
						<InputMessage placeholder="Message" rows="6" />
					</Row3>
					<CustomButton to="#hire" contact={+true} primary={+true}>
						Hire Me
					</CustomButton>
				</ContactFormRow>
			</ContactWrapper>
		</Container>
	);
};

export default Contact;
