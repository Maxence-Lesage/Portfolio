import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Open Sans', sans-serif;
    background-color: #fefff7;
    max-width: 1440px;
    margin: 0 auto;
    scroll-behavior: smooth;
    width: 90%;
}

a {
    text-decoration: none;
    color: inherit;
}

ul, ol {
    list-style: none;
}

h1, h2, h3, h4, h5, h6 {
    margin: 0;
}

.contact_modal_open {
    display: flex !important;
    flex-direction: column;
    justify-content: space-between;
}

.contact_modal_close {
    animation: modal_close_animation 0.3s ease-in-out forwards !important;
}

@keyframes modal_close_animation {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }

    100% {
        transform: translate(-50%, -50%) scale(.4);
        opacity: 0;
    }
}

/*----COLORS----*/

$colors-primary: #15110a;
$colors-secondary: #fefff7;
$colors-primary-button: #713336;
$colors-secondary-button: #ece7e5;
$colors-accent: #acac68;

/*----FONT-FAMILY----*/

$font-family-headers: 'Roboto', sans-serif;
$font-family-default: 'Open Sans', sans-serif;

`;


export default GlobalStyles;