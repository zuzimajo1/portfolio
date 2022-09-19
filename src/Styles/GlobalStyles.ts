import { createGlobalStyle } from "styled-components";
import "./fonts.css"
const GlobalStyles = createGlobalStyle`

:root{
    //for fontsize
    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    /* //for responsive width
    --width-laptop: 1024px;
    --width-tablet: 768px;
    --width-tabletS: 640px;
    --width-tabletXS: 550px;
    --width-mobileL: 480px;
    --width-mobileM: 400px;
    --width-mobileS: 360px; */

    //for spacing
    --spacing-xxs: 4px;
    --spacing-xs: 8px;
    --spacing-sm: 12px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --spacing-xxl: 64px;
    --transition1: all 0.1s ease-in-out;
    --transition2: all 0.2s ease-in-out;
    --transition3: all 0.3s ease-in-out;
    --transition4: all 0.4s ease-in-out;
    --transition5: all 0.5s ease-in-out;
    --cursor-transition: all 1s linear;
    --nav-height: 100px;
    --border-radius-circle: 50%;
    --site-max-width: 1400px;

}


*,*::before,*::after{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html{
    scroll-behavior: smooth;
    box-sizing: inherit;
    scrollbar-width: thin;
}


body::-webkit-scrollbar{
    width: 6px;
}


body::-webkit-scrollbar-thumb{
    background-color: black;
    border-radius: 15px;
    background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent)
    
}


body{
    font-family: "Poppins", "Industry", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    width: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden !important;
    background-color: rgba(41, 47, 53);
}


a{
    text-decoration: none;

}

li{
    list-style: none;
}

`;

export default GlobalStyles;
