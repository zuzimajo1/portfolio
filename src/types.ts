import { IconType } from "react-icons/lib/esm/iconBase";
import * as SiIcons from "react-icons/si";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import SecretMe from "./assets/images/secretme.png";
import ZappyFashion from "./assets/images/ZappyFashion.png";
import BarangayLunaSystem from "./assets/images/BarangayLunaManagementSystem.png"
import CocktailApp from "./assets/images/CocktailMobileApp.png";
import resume from "./assets/resume/Resume.pdf";
import BermudezApp from "./assets/images/Bermudez.png"
import Socializer from "./assets/images/Socializer.jpg";

export const navigations: navigationArr[] = [
  {
    name: "About",
    url: "#about",
    className: "navbar-wrappers",
  },
  {
    name: "Project",
    url: "#projects",
    className: "navbar-wrappers",
  },
  {
    name: "Contact",
    url: "#contact",
    className: "navbar-wrappers",
  },
  {
    name: "Resume",
    url: resume,
    className: "navbar-wrappers2",
    target: "_blank",
  },
];

export const Icons: IconsArr[] = [
  {
    iconname: "Html",
    Icon: SiIcons.SiHtml5,
  },
  {
    iconname: "Css",
    Icon: SiIcons.SiCss3,
  },
  {
    iconname: "JavaScript",
    Icon: SiIcons.SiJavascript,
  },
  {
    iconname: "TypeScript",
    Icon: SiIcons.SiTypescript,
  },
  {
    iconname: "TailwindCss",
    Icon: SiIcons.SiTailwindcss,
  },
  {
    iconname: "Bootstrap",
    Icon: SiIcons.SiBootstrap,
  },
  {
    iconname: "React",
    Icon: SiIcons.SiReact,
  },
  {
    iconname: "React Native",
    Icon: SiIcons.SiSemanticuireact,
  },
  {
    iconname: "Styled-Components",
    Icon: SiIcons.SiStyledcomponents,
  },
  {
    iconname: "React Spring",
    Icon: GiIcons.GiSpring,
  },
  {
    iconname: "Redux",
    Icon: SiIcons.SiRedux,
  },
  {
    iconname: "Node.js",
    Icon: SiIcons.SiNodedotjs,
  },
  {
    iconname: "Express.js",
    Icon: SiIcons.SiExpress,
  },
  {
    iconname: "MongoDB",
    Icon: SiIcons.SiMongodb,
  },
  {
    iconname: "MySQL",
    Icon: SiIcons.SiMysql,
  },
  {
    iconname: "Sequelize",
    Icon: SiIcons.SiSequelize,
  },
  {
    iconname: "RESTful API",
    Icon: AiIcons.AiFillApi,
  },
  {
    iconname: "Git",
    Icon: SiIcons.SiGit,
  },
];


export const Projects: projectArr[] = [
  {
    projectName: "Secret Me",
    projectUrl: "https://secretme.netlify.app/login",
    projectGithubURL: "https://github.com/zuzimajo1/secretme",
    projectimg: SecretMe,
  },
  {
    projectName: "Zappy",
    projectUrl: "https://zappyfashion.netlify.app/",
    projectGithubURL: "https://github.com/zuzimajo1/Zappyfashion",
    projectimg: ZappyFashion,
  },
  {
    projectName: "CocktailShop Mobile Application",
    projectUrl:
      "https://github.com/zuzimajo1/CocktailShop-Mobile-App/releases/tag/apk",
    projectGithubURL: "https://github.com/zuzimajo1/CocktailShop-Mobile-App",
    projectimg: CocktailApp,
  },
  {
    projectName: "Brgy. Luna Management System(THESIS)",
    projectUrl: "https://brgyluna-management-system.netlify.app/",
    projectGithubURL: "https://github.com/zuzimajo1/brgy-management-system",
    projectimg: BarangayLunaSystem,
  },
  {
    projectName: "Bermudez Mobile Application",
    projectUrl:
      "https://github.com/zuzimajo1/Bermudez-Mobile-Application/releases/tag/apk",
    projectGithubURL:
      "https://github.com/zuzimajo1/Bermudez-Mobile-Application",
    projectimg: BermudezApp,
  },
  {
    projectName: "Socializer",
    projectUrl: "https://socializerph.netlify.app/",
    projectGithubURL: "https://github.com/zuzimajo1/Socializer",
    projectimg: Socializer,
  },
];

export const SideElementIcons: sideElementArr[] = [
  {
    sideIconName: "Facebook",
    sideIconUrl: "https://www.facebook.com/zuzim.ajo",
    SideIcon: SiIcons.SiFacebook,
  },
  {
    sideIconName: "Instagram",
    sideIconUrl: "https://www.instagram.com/_itsmekoizumi/",
    SideIcon: SiIcons.SiInstagram,
  },
  {
    sideIconName: "LinkedIn",
    sideIconUrl: "https://www.linkedin.com/in/zuzim-ajo-3567a9210/",
    SideIcon: SiIcons.SiLinkedin,
  },
  {
    sideIconName: "Github",
    sideIconUrl: "https://github.com/zuzimajo1",
    SideIcon: SiIcons.SiGithub,
  },
];


export interface sideElementArr {
  sideIconName: string;
  sideIconUrl: any;
  SideIcon: IconType;
}



export interface projectArr {
  projectName: any;
  projectUrl: any;
  projectGithubURL : any;
  projectimg: any;
  
}

export interface navigationArr {
  name: string;
  url: any;
  className : string;
  target?: any;
}

export interface IconsArr {
  iconname: any;
  Icon: IconType;
}


