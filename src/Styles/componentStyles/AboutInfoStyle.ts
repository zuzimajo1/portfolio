import styled from "styled-components";
import { animated } from "react-spring";

export const AboutInfoMain = styled(animated.div)`
  width: 100%;
  height: 200vh;
  display: flex;
  justify-content: center;
`;

export const AboutMainWrapper = styled(animated.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  width: 100%;
`;

export const SideElement = styled(animated.div)`
  display: flex;
  justify-content: center;
  width: 80px;
  height: 100px;
 
  @media (max-width: 1024px) {
    width: 70px;
  }

  @media (max-width: 890px) {
    width: 60px;
  }
`;



export const SideComponent = styled(animated.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    margin: 0.2rem 0;
  }

  a {
    color: #d9e5de;

    .sideElement-icons {
      font-size: 19px;

      @media (max-width: 890px) {
        font-size: var(--fz-lg);
      }
      @media (max-width: 768px) {
        font-size: var(--fz-md);
      }
      @media (max-width: 640px) {
        font-size: var(--fz-sm);
      }
    }
  }

  p {
    writing-mode: vertical-rl;
    color: #d9e5de;
    font-size: 19px;

    @media (max-width: 890px) {
      font-size: var(--fz-lg);
    }
    @media (max-width: 768px) {
      font-size: var(--fz-md);
    }
    @media (max-width: 640px) {
      font-size: var(--fz-sm);
    }
  }
`;
