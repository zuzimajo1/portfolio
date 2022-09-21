import React from 'react'
import { config, useSpring } from 'react-spring'
import { ContactContainer } from '../Styles/componentStyles/ContactStyle';
import { IntroButton } from '../Styles/componentStyles/HeroStyle';

const Contact: React.FC = () => {
    const [styleButton, apiButton] = useSpring({from: { background: 'rgb(205, 77, 59)', transform: 'scale(1)' },}, [])

    const ButtonMouseEnter = () => {
        apiButton.start({ to: { background: 'linear-gradient(to right, #b43a57, #ac3b3b, #c45f3e, #fc4545)', transform: 'scale(1.1)' }, config: config.molasses })}

    const ButtonMouseLeave = () => {
        apiButton.start({ from: { background: 'rgb(205, 77, 59)', transform: 'scale(1)' }, config: config.molasses, delay: 400 })}

    return (
        <ContactContainer id='contact'>
            <p className="contact-message">I'm currently looking for opportunies, my inbox is always open and feel free to message me.</p>
            <IntroButton style={styleButton} onMouseEnter={ButtonMouseEnter} onMouseLeave={ButtonMouseLeave} ><a href='mailto:ajozuzim@gmail.com'>Get in touch</a></IntroButton>
            <p className="contact-copyright">&copy; Zuzim 2020</p>
        </ContactContainer>
    )
}

export default Contact;