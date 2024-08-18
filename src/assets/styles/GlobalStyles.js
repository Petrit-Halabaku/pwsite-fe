import { createGlobalStyle } from "styled-components";
import MyIcons from "../images/icons";

const GlobalStyle = createGlobalStyle`

/* -------------------------------------------------------------------------- */
/*                              VARS & ROOT/VARS                              */
/* -------------------------------------------------------------------------- */

:root{
   --white:#ffffff;
   --primaryDarkerBg:#040221;
   --primaryDarkBg:#0E0C38;
   --primaryRed:#FF0513;
   --primaryRedHover:rgba(255,5,19,0.3);
   
   --handwrite:"Grand Hotel", cursive;
   --font:"Poppins",sans-serif;
   --base-font:10px;
   --font-20:2rem;
   --font-22:2.2rem;
   --font-24:2.4rem;
   --font-25:2.5rem;
   --font-26:2.6rem;
   --font-30:3rem;
   --font-40:4rem;
   --font-50:5rem;
   --font-60:6rem;
   --font-100:10rem;
   --font-130:13rem;
   ${
		"" /*    --smallerFontSize:8px;
   --mainFontSize:10px;
   --biggerFontSize:2.6rem;
   --mainTitleSize:6rem;
   --logoSize:10rem;
   --homeTitleSize:15rem;*/
	}
    
   --thin:100;
   --extraLight:200;
   --light:300;
   --regular:400;
   --medium:500;
   --semiBold:600;
   --bold:700;
   --extraBold:800;
   --black:900;


   --container-padding:2rem;
}

/* -------------------------------------------------------------------------- */
/*                                    TAGS                                    */
/* -------------------------------------------------------------------------- */


/* ---------------------------- scrollbar styling --------------------------- */
/* Works on Firefox */
* {
   ${'' /* border:1px solid; */}
   scrollbar-width:auto;
   scrollbar-color: var(--primaryRed) var(--primaryDarkerBg);
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
   ${"" /* width: 10px; */}
   background-color: var(--primaryRed);
}

*::-webkit-scrollbar-track {
   ${"" /* width: 10px; */}
   background: var(--primaryDarkerBg);
}

*::-webkit-scrollbar-thumb {
   background-color: var(--primaryRed);
}


html{
   font-size:var(--base-font);
   font-weight:var(--regular);
   color:var(--white);
}

body{
   width:100%;
   height:100%;
   margin:0;
   padding:0;
   background-color:var(--primaryDarkBg);
   font-family:var(--font), -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
   'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
   sans-serif;
      -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;

   ${'' /* background-image: url(${MyIcons.HomeIconBackground}); */}
   background-image: url(${MyIcons.HomeIconBackground2});
	background-position: -10% top;
	background-repeat: no-repeat;
   ${"" /* background-size: 25%,30%; */}
}





a{
   text-decoration:none;
   color:var(--white);
   width: 100%;
   ${"" /* height: 100%; */}
}
p{
   margin:0;
}
textarea{
	font-family: var(--font);
}
`;

export default GlobalStyle;
