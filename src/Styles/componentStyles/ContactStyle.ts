import styled from "styled-components";
import { animated } from "react-spring";


export const ContactContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: rgb(41, 47, 53);
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem 0;

  .contact-message {
    color: #d9e5de;
    font-family: "Poppins";
    font-weight: 400;
    font-style: normal;

    @media (max-width: 1024px) {
      margin-top: 1rem;
      font-size: 17px;
    }

    @media (max-width: 890px) {
      margin-top: 0.8rem;
      font-size: var(--fz-md);
    }
    @media (max-width: 850px) {
      text-align: center;
    }
    @media (max-width: 550px) {
      font-size: 15px;
    }
  }

  .contact-copyright {
    margin-top: 4rem;
    color: #d9e5de;
    font-family: "Poppins";
    font-weight: 400;
    font-style: normal;

    @media (max-width: 1024px) {
      margin-top: 1rem;
      font-size: 17px;
    }

    @media (max-width: 890px) {
      margin-top: 0.8rem;
      font-size: var(--fz-md);
    }
    @media (max-width: 850px) {
      text-align: center;
    }
    @media (max-width: 550px) {
      font-size: 15px;
    }
  }
`;
