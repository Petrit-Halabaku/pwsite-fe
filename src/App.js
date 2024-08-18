import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import SPAPublicPage from "./pages";
import GlobalStyle from "./assets/styles/GlobalStyles.js";
// import EllipseImg from "./assets/images/ellipseBckgDesign.png";
// import SquareImg from "./assets/images/squareBckgDesign.png";


library.add(fab, faAngleLeft, faAngleRight);
function App() {
	return (
		<>
			<GlobalStyle />
			<SPAPublicPage />
		</>
	);
}

export default App;
