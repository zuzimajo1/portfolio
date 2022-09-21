import styled from "styled-components";
import { animated } from "react-spring";


export const HeroStyle = styled.main`
  margin-top: 8rem;
  width: 100%;
  height: 100vh;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  .hero-container {
    margin-top: 9.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2rem;
  }
`;

 export const Intro = styled(animated.p)`
   font-size: clamp(1rem, 2.5vw, 1.5rem);
   color: #fff;
   font-family: "Industry";
 `;

 export const IntroName = styled(animated.h2)`
   font-size: clamp(3rem, 5vw, 4rem);
   color: #fff;
   font-family: "Industry";
 `;

 export const IntroDescription = styled(animated.p)`
   color: #fff;
   font-size: 20px;
   flex-wrap: wrap;
   font-family: "Industry";
   text-align: center;
   width: 80%;

   @media(max-width: 640px){
    font-size: 18px;
   }
 `;

export const IntroButton = styled(animated.button)`
  width: "auto";
  height: "auto";
  align-self: center;
  margin-top: var(--spacing-md);
  font-size: 24px;
  padding: 5px 8px;
  background: rgb(205, 77, 59);
  color: black;
  cursor: pointer;
  font-family: "Poppins";
  outline: none;
  border: none;

  a {
    color: black;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 23px;
    padding: 4px 6px;
  }

  @media (max-width: 640px) {
    font-size: 21px;
  }
  @media (max-width: 550px) {
    padding: 3px 5px;
    font-size: 20px;
  }
`;

export const ScrollButton = styled(animated.button)`
  position: absolute;
  bottom: 15px;
  left: 50px;
  font-size: 18px;
  padding: 4px 8px;
  cursor: pointer;
  background: none;
  color: #fff;
  border: none;

  @media (max-width: 640px) {
    font-size: 17px;
  }
  @media (max-width: 550px) {
    padding: 3px 6px;
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 15px;
  }

  a {
    color: #fff;
  }
`;





