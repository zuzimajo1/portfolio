import styled from "styled-components";
import { animated } from "react-spring";

export const AboutStyle = styled.main`
  width: 100%;
  height: auto;
  background-color: rgb(41, 47, 53);
  background-size: cover;
  padding-bottom: 1rem;

  .about-container {
    margin-top: 1rem;
    width: 100%;
    height: auto;
    padding: 2rem 0rem;

    .about-wrapper {
      width: 100%;
      height: auto;
      display: flex;
      margin-top: 2rem;

      @media (max-width: 850px) {
        flex-direction: column;
        align-items: center;
      }

      .authorimagewrapper {
        width: 340px;
        height: 350px;

        @media (max-width: 1024px) {
          width: 300px;
          height: 310px;
        }
        @media (max-width: 890px) {
          width: 270px;
          height: 280px;
        }
      }

      .authordetailswrapper {
        margin-top: 0.8rem;
        margin-left: 2rem;
        width: 100%;
        text-align: left;
        display: flex;
        flex-direction: column;

        @media (max-width: 1024px) {
          margin-top: 0;
          margin-left: 1.5rem;
        }
        @media (max-width: 890px) {
          margin-left: 1rem;
        }
        @media (max-width: 850px) {
          margin-top: 0.8rem;
          text-align: center;
          margin-left: 0;
          width: 85%;
          align-items: center;
        }
        @media (max-width: 640px) {
          width: 95%;
        }
        @media (max-width: 480px) {
          width: 100%;
        }
      }
    }
  }
`;

export const HeaderAbout = styled(animated.h2)`
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

export const AuthorImage = styled(animated.img)`
  border-radius: 10px;
  width: 340px;
  height: 350px;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 300px;
    height: 310px;
  }

  @media (max-width: 890px) {
    width: 270px;
    height: 280px;
  }
`;

export const AuthorDetails = styled(animated.p)`
  display: flex;
  width: auto;
  text-align: justify;
  font-size: var(--fz-lg);
  color: #d9e5de;
  font-family: "Poppins";
  font-weight: 400;
  font-style: normal;
  margin-top: 1.5rem;

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
`;

export const AuthorDetails2 = styled(animated.p)`
  display: flex;
  width: auto;
  text-align: justify;
  font-size: var(--fz-lg);
  color: #d9e5de;
  font-family: "Poppins";
  font-weight: 400;
  font-style: normal;
  margin-top: 1.5rem;

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
`;

export const AuthorDetails3 = styled(animated.p)`
  display: flex;
  width: auto;
  text-align: justify;
  font-size: var(--fz-lg);
  color: #d9e5de;
  font-family: "Poppins";
  font-weight: 400;
  font-style: normal;
  margin-top: 1.5rem;

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
`;

export const AuthorName = styled(animated.p)`
  width: auto;
  display: flex;
  font-size: var(--fz-lg);
  color: #d9e5de;
  font-family: "Poppins";
  font-weight: 400;
  font-style: normal;

  @media (max-width: 1024px) {
    font-size: 17px;
  }

  @media (max-width: 890px) {
    font-size: var(--fz-md);
  }

  @media (max-width: 850px) {
    text-align: center;
  }
  @media (max-width: 550px) {
    font-size: 15px;
  }
`;
