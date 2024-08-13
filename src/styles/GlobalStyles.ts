import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

* {
	margin:0;
	padding:0;
  	box-sizing: border-box;
}

html {
	width: 100%;
	height: 100%;
}

body {
	width:100%;
	height:100%;
	font-family: "Poppins", sans-serif;
	font-size: 14px;
	font-weight:400;
	line-height: 150%;
	letter-spacing:-0.5px;
	color: #333;
	overflow-x: hidden;
	background-color: #f5f5f5; //영역확인용
}

div,h1,h2,h3,h4,h5,h6,ul,ol,li,
dl,dt,dd,p,form,fieldset,input,label,
table,tr,th,td,button,textarea,select,a {
	font-family: "Poppins", sans-serif;
	font-size: 16px;
	font-weight:400;
	line-height: 150%;
	letter-spacing:-0.5px;
	color: #121212;
}
h1, h2, h3, h4, h5, h6{
	font-size:100%;
	font-weight:normal;
}
img {
	border:0;
	vertical-align:top
}

ul,ol,dl,dt,dd,li {
	list-style:none; 
	word-break:break-word
}
table {
	width:100%; 
	table-layout:fixed
}

table, th, td {
	border-collapse:collapse;
	border-spacing:0; 
	border:0; 
	word-wrap:break-word
}

caption,
legend {
	overflow:hidden;
	width:0; 
	height:0;
	font-size:0;
	line-height:0
}

fieldset, 
blockquote, 
iframe, 
button {
	border:none
}

i, em, u, cite {
	font-style:normal
}

strong,em, b {
	font-weight: 700;
}

a {
	color: #121212;
	text-decoration:none;
	cursor:pointer;
}

button {
	border:none;
	cursor:pointer;
	vertical-align:middle;
	outline:none; 
	background: none;
}



button,input[type="submit"], input[type="button"], input[type="reset"] {
	cursor:pointer; 
	border:0
}

	
input,select {-webkit-appearance: none;border-radius: 0;-webkit-border-radius: 0; border: none;}
`;

export default GlobalStyles;
