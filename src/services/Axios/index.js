import axios from "axios";

export const gitData = axios.create({
	baseURL: `${process.env.REACT_APP_GITHUB_API}`,
});

export const cardsData = axios.create({
	// baseURL: `${process.env.REACT_APP_DATA}`,
	baseURL: "http://localhost:3000/db",
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
		"Cross-Origin-Embedder-Policy": "require-corp",
		"Cross-Origin-Opener-Policy": "same-origin",
	},
});
