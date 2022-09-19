import React from 'react'
import { Hero, Navbar, } from '../Components'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import BackgroundImage from "../assets/images/herobackground.jpg";
import Contents from '../Components/Contents';
const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <ParallaxBanner style={{ aspectRatio: '2 / 1', width: '100%', height: '100vh', backgroundSize: 'cover' }}>
        <ParallaxBannerLayer image={BackgroundImage} speed={20}>
          <Hero />
        </ParallaxBannerLayer>
      </ParallaxBanner>
      <Contents />
    </>
  )
}

export default Home