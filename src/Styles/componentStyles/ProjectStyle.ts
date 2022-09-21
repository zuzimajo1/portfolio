import styled from "styled-components";
import { animated } from "react-spring";

export const ProjectStyle = styled.main`
  width: 100%;
  height: auto;
  background-color: rgba(41, 47, 53);
  background-size: cover;
  margin-top: 1rem;

  .projects-container {
    width: 100%;
    height: auto;

    .projects-items {
      padding: 1.2rem 1.2rem 0rem 1.2rem;
      background-color: #d9e5de;
      width: 100%;

      .project-images {
        width: 100%;
        height: 300px;

        @media (max-width: 550px) {
          height: 220px;
        }
      }

      .projects-inner-wrapper {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        margin-top: 0.5rem;
        padding-bottom: 0.2rem;

        p {
          font-size: var(--fz-lg);

          @media (max-width: 768px) {
            font-size: 17px;
          }

          @media (max-width: 640px) {
            font-size: var(--fz-md);
          }
        }

        a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      a {
        width: 100%;

        img {
          width: 100%;

          &:hover {
            transform: scale(1.1);
            transition: ease-in-out 250ms;
          }
        }
      }
    }
  }
`;

export const ProjectHeader = styled(animated.h2)`
  font-size: 38px;
  color: #25a65a;
  font-family: "Industry";
  font-weight: 700;
  font-style: normal;

  @media (max-width: 1024px) {
    font-size: 36px;
  }
  @media (max-width: 840px) {
    font-size: 34px;
  }
  @media (max-width: 640px) {
    font-size: 33px;
  }
`;



export const ProjectsWrapper = styled(animated.div)`
  margin-top: 2rem;
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 40px;

  @media (max-width: 550px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  
`;