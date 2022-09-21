import styled from "styled-components";
import { animated } from "react-spring";

export const NavbarContainer = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`

export const MenuContainer = styled(animated.div)`
  width: 100%;
  height: 93vh;
  position: absolute;
  top: 45px;
  z-index: 999;
  transition: ease-in-out 500ms;

  @media (min-width: 640px) {
    display: none;
  }

  .navigations-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: auto;
    background-color: rgba(41, 47, 53, 0.8);

    ul {
      width: 100%;

      a {
        color: white;
        width: 100%;
      }

      li {
        padding: var(--spacing-xs) var(--spacing-xs);
        font-size: var(--fz-md);
        font-family: "Industry";
        font-weight: 500;
        width: 100%;
      }
    }
  }

  .navigations-modal {
    width: 100%;
    height: 74vh;
    background-color: rgba(41, 47, 53, 0.2);
  }
`;


export const NavigationItems = styled(animated.p)`


  &:hover {
    transform: translateX(15px);
    transition: ease-in-out 500ms;
  }
`;


export const NavbarStyle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--spacing-lg);
  height: 45px;
  font-weight: 100;
  background-color: rgb(41, 47, 53);

  @media (max-width: 768px) {
    padding: 0 var(--spacing-sm);
  }

  a{
    color: white;
  }

  .navbars {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media (max-width: 640px) {
      display: none;
    }

    .navbar-wrappers {
      padding: 0 var(--spacing-xs);
      font-size: var(--fz-md);
      font-family: "Industry";
      font-weight: 500;

      a {
        color: white;
      }
    }
    .navbar-wrappers2 {
      background-color: #25a65a;
      font-size: var(--fz-md);
      font-family: "Industry";
      padding: 3px 4px;
      border-radius: 2px;
      font-weight: 500;

      a {
        color: white;
      }
    }
  }

  .menu-bars {
    width: auto;
    cursor: pointer;
    display: none;
   
    @media (max-width: 640px) {
      display: block;
    }
  }

  h2 {
    color: white;
    font-family: "Industry";
    font-weight: 700;
    font-style: normal;
    font-size: 28px;
  }
`;

export const MenuBarTop = styled(animated.div)`
  width: 28px;
  height: 2px;
  background-color: white;
  margin: 5px 0;
  transition: ease-in-out 500ms;
  
`;

export const MenuBarMiddle = styled(animated.div)`
  width: 28px;
  height: 2px;
  background-color: white;
  margin: 5px 0;
  transition: ease-in-out 500ms;
`;

export const MenuBarBottom = styled(animated.div)`
  width: 28px;
  height: 2px;
  background-color: white;
  margin: 5px 0;
  transition: ease-in-out 500ms;
`;


