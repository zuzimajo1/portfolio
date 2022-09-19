import React, { useState, useEffect } from 'react'
import { NavbarStyle, MenuBarTop, MenuBarMiddle, MenuBarBottom, NavbarContainer, MenuContainer, NavigationItems } from '../Styles/componentStyles/NavbarStyle'
import { navigationArr, navigations } from '../types'
import { useSpring } from 'react-spring'


const Navbar: React.FC = () => {
  const [openMenu, setopenMenu] = useState<boolean>(false);
  const [windowSize, setwindowSize] = useState<number>(window.innerWidth);


  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      setwindowSize(window.innerWidth)
    });

  },[windowSize])




  useEffect(() => {
    if (openMenu) {
      OpenMenuStart();
    } else {
      OpenMenuExit();
    }
  }, [openMenu, windowSize])





  const [menuMiddleAnimation, apimenuMiddle] = useSpring({ from: { transform: 'translateX(0)', opacity: 1 } }, [])
  const [menuTopAnimation, apimenuTop] = useSpring({ from: { transform: 'translateY(0) rotate(0deg)', } }, [])
  const [menuBottomAnimation, apimenuBottom] = useSpring({ from: { transform: 'translateY(0) rotate(0deg)', } }, [])
  const [menuContainer, apimenuContainer] = useSpring({ from: { top: '-1000px', opacity: 1, display: 'none' } }, [])

  const OpenMenuStart = () => {
    apimenuMiddle.start({ to: { transform: 'translateX(40px)', opacity: 0 }, })
    apimenuTop.start({ to: { transform: 'translateY(7px) rotate(45deg)' }, })
    apimenuBottom.start({ to: { transform: 'translateY(-7px) rotate(-45deg)' }, })
    windowSize <= 640 ? apimenuContainer.start({ to: { top: '45px', opacity: 1, display: 'block' } }) : apimenuContainer.start({ from: { top: '-1000px', opacity: 1, display: 'none' } })
    windowSize <= 640 ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";
  }

  const OpenMenuExit = ()=>{
    apimenuMiddle.start({from:{transform: 'translateX(0)', opacity: 1}});
    apimenuTop.start({ from: { transform: 'translateY(0) rotate(0deg)', } })
    apimenuBottom.start({ from: { transform: 'translateY(0) rotate(0deg)', } })
    apimenuContainer.start({ from: { top: '-1000px', opacity: 1, } })
    document.body.style.overflow = "auto";
  }

  return (
    <NavbarContainer>
      <NavbarStyle id="/">
        <div className='logo'>
          <h2><a href="https://zuzimajo.tech">Porfolio.</a></h2>
        </div>
        <div>
          <ul className='navbars'>
            {navigations.map(({ name, url, className }: navigationArr) => (
              <li key={name} className={className}><a href={url}>{name}</a></li>
            ))
            }
          </ul>
          <div className='menu-bars' onClick={() => setopenMenu(!openMenu)} >
            <MenuBarTop style={menuTopAnimation} className="menu1"></MenuBarTop>
            <MenuBarMiddle style={menuMiddleAnimation} className="menu2"></MenuBarMiddle>
            <MenuBarBottom style={menuBottomAnimation} className="menu3"></MenuBarBottom>
          </div>
        </div>
      </NavbarStyle>
      <MenuContainer style={menuContainer}>
        <div className="navigations-wrapper">
          <ul className='navbars'>
            {navigations.map(({ name, url, className }: navigationArr) => (
              <a key={name} href={url}><li className={className} onClick={()=> setopenMenu(false)}><NavigationItems>{name}</NavigationItems></li></a>
            ))
            }
          </ul>
        </div>
        <div className="navigations-modal" onClick={() => setopenMenu(false)} ></div>
      </MenuContainer>
    </NavbarContainer>
  )
}

export default Navbar