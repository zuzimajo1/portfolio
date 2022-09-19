import styled from "styled-components";
import { animated } from "react-spring";

export const SkillContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: rgba(41, 47, 53);
  padding-bottom: 3rem;

  p {
    color: #d9e5de;
    text-align: center;
    font-family: "Poppins";
    font-size: var(--fz-lg);
    margin-top: var(--spacing-md);

    @media (max-width: 1024px) {
      font-size: 17px;
    }
    @media (max-width: 890px) {
      font-size: var(--fz-md);
    }
    @media (max-width: 550px) {
      font-size: 15px;
    }
  }
`;

export const SkillsTitleMain = styled(animated.h2)`
  color: #d9e5de;
  text-align: center;
  font-family: "Industry";
  font-weight: 700;
  font-style: normal;
  font-size: 30px;

  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 890px) {
    font-size: 27px;
  }
  @media (max-width: 550px) {
    font-size: 26px;
  }
`;

export const SkillsIconsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SkillsIconsWrapper = styled(animated.div)`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  justify-content: center;
  

  @media (max-width: 890px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    width: 95%;
  }

  .tech-names {
    border: 1px solid #25a65a;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-xxs) var(--spacing-xs);
    font-family: "Poppins";
    font-size: var(--fz-xl);
    font-weight: 400;
    font-style: normal;
    border-radius: 6px;
    margin-right: 1rem;

    @media (max-width: 890px) {
      font-size: 19px;
    }
    @media (max-width: 768px) {
      font-size: var(--fz-lg);
    }
    @media (max-width: 640px) {
     font-size: var(--fz-md);
    }

    .tech-logos {
      font-size: var(--fz-xl);
      margin-right: 0.3rem;

      @media (max-width: 890px) {
        font-size: 19px;
      }
      @media (max-width: 768px) {
        font-size: var(--fz-lg);
      }
      @media (max-width: 640px) {
        font-size: var(--fz-md);
      }
    }
  }
`;


