import React, {useEffect, useState} from 'react'
import { SkillContainer, SkillsTitleMain, SkillsIconsContainer, SkillsIconsWrapper  } from '../Styles/componentStyles/SkillStyle'
import { Icons, IconsArr } from '../types'
import { useParallax } from 'react-scroll-parallax';
import { config, useSpring } from 'react-spring'

const Skills: React.FC = () => {
    const [enter, setenter] = useState<boolean>(false);
    const [showskills, setshowskills] = useState<boolean>(false);

    const { ref } = useParallax<HTMLDivElement>({
        onEnter: () => setenter(true),
        onExit: () => setenter(false),
    })

    const [AnimationSubHeader, apiSubHeader] = useSpring({ from: { opacity: 0} },[])
    const [AnimationSkills, apiSkills] = useSpring({ from: { opacity: 0 } }, [])


    useEffect(()=>{
        if(enter){
            AnimationEnter();
        }else{
            AnimationExit();
        }
    }, [enter, showskills])

    const AnimationEnter = ()=>{
        apiSubHeader.start({ to: { opacity: 1 }, config: config.molasses, onRest: () => setshowskills(true) })
        showskills && apiSkills.start({ to: { opacity: 1 }, config: config.molasses})
    }

    const AnimationExit = ()=>{
        apiSubHeader.start({ from: { opacity: 0 }, onStart: () => setshowskills(false) })
        apiSkills.start({ from: { opacity: 0 } })
    }



    return (
        <SkillContainer ref={ref}>
            <SkillsTitleMain  style={AnimationSubHeader}>Skills</SkillsTitleMain>
            <p>I primarily build application using these technologies</p>
            <SkillsIconsContainer>
                <SkillsIconsWrapper style={AnimationSkills}>
                   {Icons.map(({iconname, Icon}: IconsArr)=>(
                        <p key={iconname}  className="tech-names"><Icon className='tech-logos'/>{iconname}</p>
                   ))}
                </SkillsIconsWrapper>
            </SkillsIconsContainer>
        </SkillContainer>
    )
}

export default Skills