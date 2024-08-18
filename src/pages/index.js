import React from "react";
import AboutMe from "./About";
import Contact from "./Contact";
import Footer from "../parts/Footer";
import Home from "./Home";
import Header from "../parts/Header";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Testimonials from "./Testimonials";
import { Cards } from "../helpers/cardsContent";
// import { Container } from "../UIComponents/Container";

const index = () => {
	return (
		<>
			<Header />
			<Home />
			<AboutMe />
			<Portfolio cards={Cards} />
			<Skills />
			<Testimonials />
			<Contact />
			<Footer />
		</>
	);
};

export default index;
