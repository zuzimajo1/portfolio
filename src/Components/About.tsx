import React, { useState, useEffect } from 'react'
import { useParallax } from 'react-scroll-parallax';
import { useSpring, config } from 'react-spring';
import { AboutStyle, HeaderAbout, AuthorImage, AuthorDetails, AuthorDetails2, AuthorDetails3, AuthorName } from '../Styles/componentStyles/AboutStyle';
import AuthorPic1 from "../assets/images/ZuzimImage2.jpg";
import AuthorPic2 from "../assets/images/ZuzimImage3.jpg";
import AuthorPic3 from "../assets/images/ZuzimImage.jpg";

const About: React.FC = () => {
  const [enter, setenter] = useState<boolean>(false);
  const [ImageSelect, setImageSelect] = useState<number>(0);
  const [Flip, setFlip] = useState<boolean>(false)
  const Images = [AuthorPic1, AuthorPic2, AuthorPic3]
  const [startAuthorName, setstartAuthorName] = useState<boolean>(false);
  const [startAuthorDetail, setstartAuthorDetail] = useState<boolean>(false);
  const [startAuthorDetail2, setstartAuthorDetail2] = useState<boolean>(false);

  const { ref } = useParallax<HTMLDivElement>({
    onEnter: () => setenter(true),
    onExit: () => setenter(false),
  })

  const [styleImage, apiImage] = useSpring({
    from: { translateY: -200, opacity: 0, transform: 'rotateY(360deg)' },
    config: config.gentle,
  }, [])

  const [styleAnimation, apiAnimation] = useSpring({
    from: { translate: -400, opacity: 0 },
    config: config.molasses,
  }, [])

  const [styleAuthorName, apiAuthorName] = useSpring({
    from: { translateY: -300, opacity: 0 },
    config: config.molasses,
  }, [])

  const [styleAuthorDetail, apiAuthorDetail] = useSpring({
    from: { translateY: -200, opacity: 0 },
    config: config.molasses,
  }, [])

  const [styleAuthorDetail2, apiAuthorDetail2] = useSpring({
    from: { translateY: -100, opacity: 0 },
    config: config.molasses,
  }, [])

  const [styleAuthorDetail3, apiAuthorDetail3] = useSpring({
    from: { translateY: -50, opacity: 0 },
    config: config.molasses,
  }, [])

  useEffect(() => {
    if (enter) {
      AnimationEnter();
    } else {
      AnimationExit();
    }
  }, [enter, startAuthorName, startAuthorDetail, startAuthorDetail2])


  const HandleImage = (condition: any) => {
    if (condition < Images.length - 1) {
      setImageSelect(ImageSelect + 1)
    } else if (condition > Image.length - 1) {
      setImageSelect(0);
    }
    HandleImageClick();
  }

  const HandleImageClick = () => {
    setFlip(!Flip)
    ImageRotate();
  }

  const ImageRotate = () => {
    apiImage.start({
      to: { transform: `rotateY(${Flip ? 0 : 360}deg)` },
      config: config.wobbly
    })
  }

  const AnimationEnter = () => {
    apiAnimation.start({ to: { translate: 0, opacity: 1 }, delay: 200, })
    apiImage.start({ to: { translateY: 0, opacity: 1 }, delay: 200 })
    apiAuthorName.start({ to: { translateY: 0, opacity: 1 }, onRest: () => setstartAuthorName(true) })
    startAuthorName && apiAuthorDetail.start({ to: { translateY: 0, opacity: 1 }, onRest: () => setstartAuthorDetail(true) })
    startAuthorDetail && apiAuthorDetail2.start({ to: { translateY: 0, opacity: 1 }, onRest: () => setstartAuthorDetail2(true) })
    startAuthorDetail2 && apiAuthorDetail3.start({ to: { translateY: 0, opacity: 1 }, })
  }

  const AnimationExit = () => {
    apiAnimation.start({ from: { translate: -400, opacity: 0 } })
    apiImage.start({ from: { translateY: -200, opacity: 0, transform: `rotateY(${Flip ? 360 : 0}deg)` } })
    apiAuthorName.start({ from: { opacity: 0 }, config: config.molasses, onStart: () => setstartAuthorName(false) })
    apiAuthorDetail.start({ from: { opacity: 0 }, config: config.molasses, onStart: () => setstartAuthorDetail(false) })
    apiAuthorDetail2.start({ from: { opacity: 0 }, config: config.molasses, onStart: () => setstartAuthorDetail2(false) })
    apiAuthorDetail3.start({ from: { opacity: 0 }, config: config.molasses, })
  }

  const authorname = "My name's Zuzim Ajo"
  const authordetails = "I'm an aspiring Full-Stack Web Developer and currently looking for opportunities. I'm a graduate of Bachelor of Science in Computer Engineering at Surigao del Norte State University."
  const authordetails2 = "I begin learning coding with C++ and Java languages. I then proceeded learning Web Development in 2020 choosing JavaScipt as my main language and found fondness of discovering new technologies and building personal projects. I aim to expand my knowledge and develop excellent application."
  const authordetails3 = "I also love playing Dota 2 and Genshin Impact during my leisure time."

  return (
    <AboutStyle id="about" >
      <div className='about-container'>
        <HeaderAbout style={styleAnimation}>About Me.</HeaderAbout>
        <div className='about-wrapper' ref={ref}>
          <div className="authorimagewrapper">
            <AuthorImage style={styleImage} src={Images[ImageSelect]} alt="authorImage" className='authorImage' onClick={() => HandleImage(ImageSelect)}></AuthorImage>
          </div>
          <div className="authordetailswrapper">
            <AuthorName style={styleAuthorName}>{authorname}</AuthorName>
            <AuthorDetails style={styleAuthorDetail}>{authordetails}</AuthorDetails>
            <AuthorDetails2 style={styleAuthorDetail2}>{authordetails2}</AuthorDetails2>
            <AuthorDetails3 style={styleAuthorDetail3}>{authordetails3}</AuthorDetails3>
          </div>
        </div>
      </div>
    </AboutStyle>
  )
}

export default About