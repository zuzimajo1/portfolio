import React, { useEffect, useState } from 'react'
import { HeroStyle, Intro, IntroName, IntroDescription, IntroButton, ScrollButton } from '../Styles/componentStyles/HeroStyle'
import { config, useSpring } from 'react-spring'
import { useParallax } from 'react-scroll-parallax';

const Hero: React.FC = () => {

  const [sliceNo, setsliceNo] = useState<number>(0);
  const [startAnimateIntro, setstartAnimateIntro] = useState<boolean>(false);
  const [startAnimate, setstartAnimate] = useState<boolean>(false);
  const [enter, setenter] = useState<boolean>(false);

  const { ref } = useParallax<HTMLDivElement>({
    onEnter: () => setenter(true),
    onExit: () => setenter(false),
  })

  const [styleAnimationIntro, apiAnimationIntro] = useSpring({
    from: { opacity: 0, translate: -400 }
  }, [])

  const [styleAnimation, apiAnimation] = useSpring({
    from: { opacity: 0 },
  }, [])

  const [styleDescription, apiDescription] = useSpring({
    from: { opacity: 0 },
  }, [])

  const [styleSrollButton, apiScrollButton] = useSpring({
    from: { opacity: 0, display: 'none' },
  },[])

  const [styleButton, apiButton] = useSpring({
    from: { opacity: 0, background: 'rgb(205, 77, 59)', transform: 'scale(1)', display: 'none' },
  }, [])

  useEffect(()=>{
    if(enter){
      AnimationEnter();
      const numberinterval = setInterval(() => {(startAnimate && sliceNo < 155) && setsliceNo(sliceNo + 1)}, 40)
      return () => clearInterval(numberinterval)
    }else{
      AnimationExit();
    }
  }, [enter, startAnimateIntro, sliceNo, startAnimate])



  const AnimationEnter = ()=>{
    apiAnimationIntro.start({to: { translate: 0, opacity: 1 },config: config.gentle, onRest: () => setstartAnimateIntro(true)})
    startAnimateIntro && apiAnimation.start({ to: { opacity: 1 },config: config.gentle, onRest: () => setstartAnimate(true)})
    startAnimate && apiDescription.start({ to: { opacity: 1 },config: config.gentle, })
    sliceNo === 155 && apiButton.start({ to: { opacity: 1, display: 'block' }, config: config.gentle, })
    sliceNo === 155 && apiScrollButton.start({ to: { opacity: 1, display: 'block' }, config: config.gentle, })
  }

  const AnimationExit = ()=>{
    apiAnimationIntro.start({ from: { opacity: 0 }, onStart: () => setstartAnimateIntro(false) })
    apiAnimation.start({ from: { opacity: 0 }, onStart: () => setstartAnimate(false) })
    apiDescription.start({ from: { opacity: 0 }})
    apiButton.start({from: {opacity: 0}})
    apiScrollButton.start({from: {opacity: 0}})
  }

  const ButtonMouseEnter = ()=>{
    apiButton.start({ to: { background: 'linear-gradient(to right, #b43a57, #ac3b3b, #c45f3e, #fc4545)', transform: 'scale(1.1)' }, config: config.molasses })
  }

  const ButtonMouseLeave = ()=>{
    apiButton.start({ from: { background: 'rgb(205, 77, 59)', transform: 'scale(1)' }, config: config.molasses, delay: 400 })
  }

  const description: string = "I'm a Full-Stack Web Developer based in the Philippines. I loved building web applications using React and enhancing my knowledge in different technologies."

  return (
    <HeroStyle ref={ref}>
      <div className='hero-container'>
        <Intro className='intro' style={styleAnimationIntro}>Hi, I am</Intro>
        <IntroName className='intro-name' style={styleAnimation}>Zuzim Ajo</IntroName>
        <IntroDescription className='intro-description' style={styleDescription} >{description.slice(0, sliceNo)}</IntroDescription>
        <IntroButton style={styleButton} onMouseEnter={ButtonMouseEnter} onMouseLeave={ButtonMouseLeave}><a href="#contact">Get in Touch</a></IntroButton>
      </div>
      <ScrollButton style={styleSrollButton}><a href="#about">Scroll down</a></ScrollButton>
    </HeroStyle>
  )
}

export default Hero