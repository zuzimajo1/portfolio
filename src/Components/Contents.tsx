import React, { useState, useEffect } from 'react'
import { AboutInfoMain, AboutMainWrapper, SideComponent, SideElement } from '../Styles/componentStyles/AboutInfoStyle'
import About from './About'
import Project from './Project'
import { useParallax } from 'react-scroll-parallax';
import { useSpring } from 'react-spring'
import Skills from './Skills';
import { SideElementIcons, sideElementArr } from '../types';

const Contents: React.FC = () => {
  const [Progress, setProgress] = useState<number>();
  const [enter, setenter] = useState<boolean>(false);
  
  const { ref } = useParallax<HTMLDivElement>({
    onProgressChange: (progress) => setProgress(progress),
    onEnter: () => setenter(true),
  })

  const [Animation, apiAnimation] = useSpring({ from: { opacity: 1, transform: 'translateY(0px)' } }, []);

  let ProgressValue = ((Number(Progress?.toFixed(2))) * 90);

  useEffect(() => {
    enter && apiAnimation.start({ to: { opacity: 1, transform: `translateY(${ProgressValue}em)` } })
  }, [Progress, enter])

  return (
    <AboutInfoMain ref={ref}>
      <SideElement>
        <SideComponent style={Animation}>
          <ul>{
              SideElementIcons.map(({ sideIconName, sideIconUrl, SideIcon }: sideElementArr)=>(
                <li key={sideIconName} ><a href={sideIconUrl} rel="noopener noreferrer" target="_blank"><SideIcon className="sideElement-icons" /></a></li>
            ))}
          </ul>
        </SideComponent>
      </SideElement>
      <AboutMainWrapper >
        <About />
        <Skills />
        <Project />
      </AboutMainWrapper>
      <SideElement>
        <SideComponent style={Animation}><p>ajozuzim@gmail.com</p></SideComponent>
      </SideElement>
    </AboutInfoMain>
  )
}

export default Contents;