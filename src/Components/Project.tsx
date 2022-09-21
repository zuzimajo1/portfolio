import React, { useState, useEffect } from 'react'
import { ProjectHeader, ProjectStyle, ProjectsWrapper } from '../Styles/componentStyles/ProjectStyle'
import { Projects, projectArr } from '../types'
import { useParallax } from 'react-scroll-parallax';
import { useSpring, config } from 'react-spring';
import * as SiIcon from "react-icons/si";


const Project: React.FC = () => {
  const [enter, setenter] = useState<boolean>(false);
  

  const { ref } = useParallax<HTMLDivElement>({
    onEnter: () => setenter(true),
    onExit: () => setenter(false),
  })

  const [styleAnimation, apiAnimation] = useSpring({
    from: { translate: -400, opacity: 0 },
    config: config.molasses,
  }, [])


  useEffect(() => {
    if (enter) {
      AnimationEnter();
    } else {
      AnimationExit();
    }
  }, [enter])


  const AnimationEnter = () => {
    apiAnimation.start({ to: { translate: 0, opacity: 1 }, delay: 200 })
   
  }

  const AnimationExit = () => {
    apiAnimation.start({ from: { translate: -400, opacity: 0 }, delay: 200 })
    
  }
  


  return (
    <ProjectStyle id="projects">
      <div className="projects-container">
        <ProjectHeader style={styleAnimation}>Projects.</ProjectHeader>
        <ProjectsWrapper  ref={ref}>
          {Projects.map(({ projectName, projectUrl, projectGithubURL, projectimg }: projectArr)=>(
            <div className="projects-items" key={projectName}>
            <div><a href={projectUrl} rel="noopener noreferrer" target="_blank"><img className="project-images" src={projectimg} alt={projectName}></img></a></div> 
            <div className="projects-inner-wrapper">
              <p>{projectName}</p>
              <p><a href={projectGithubURL} target="_blank" rel="noopener noreferrer"><SiIcon.SiGithub className="projects-icon" color="black" /></a></p>
            </div>
            </div>
          ))}
        </ProjectsWrapper>
      </div>
    </ProjectStyle>
  )
}




export default Project