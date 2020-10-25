import React, { useState, useCallback, memo } from 'react';
import Typical from 'react-typical';
import { 
    LandingContainer, 
    LandingImgBg, 
    ImgBg, 
    LandingContent,
    LandingH1,
    LandingH2,
    LandingBtnWrapper,
    LandingBtn,
    ArrowForward,
    ArrowRight,
    IconWrapper,
    SocialMediaIcon
} from './LandingElements';

const imgBg = require('../../images/imgBg.jpg');
const fbSvg = require('../../images/facebook.svg');
const twitterSvg = require('../../images/twitter.svg');
const githubSvg = require('../../images/github.svg');

const TypicalComponent = () => (
    <Typical
        steps={['Web Developer', 1000, 'Web Programmer.', 2000]}
        loop={2}
        wrapper="LandingH2"
        style={{fontFamily: 'Press Start 2P'}}
    />
)

const MemoTypical = memo(TypicalComponent)

const Landing = () => {
    const [hover, setHover] = useState(false);
    const onHover = useCallback(() =>{ setHover(!hover)}, [hover])

    return (
        <LandingContainer>
            <LandingImgBg>
                <ImgBg src={imgBg}/>
            </LandingImgBg>
            <LandingContent>
                <LandingH1> Hi , I’m Ronnie. </LandingH1>
               <LandingH2> {`I am a  `} </LandingH2>
               <LandingH2 colorBlue={true}>
                   <MemoTypical/>
                </LandingH2>
               <LandingBtnWrapper
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 1.5 }} 
               >
                   <LandingBtn
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                   >
                        Contact { hover ? <ArrowForward/> : <ArrowRight/> }
                   </LandingBtn>
               </LandingBtnWrapper>
               <IconWrapper>
                    <SocialMediaIcon 
                        src={githubSvg} 
                        alt="github" 
                        animate={iconInitialAnimate} 
                        whileHover={{ scale: 2 }} 
                        whileTap={{ scale: 1.5 }} 
                    />
                    <SocialMediaIcon 
                        src={fbSvg} 
                        alt="facebook" 
                        animate={iconInitialAnimate} 
                        whileHover={{ scale: 2 }} 
                        whileTap={{ scale: 1.5 }} 
                    />
                    <SocialMediaIcon 
                        src={twitterSvg} 
                        alt="twitter" 
                        animate={iconInitialAnimate} 
                        whileHover={{ scale: 2 }} 
                        whileTap={{ scale: 1.5 }} 
                    />
               </IconWrapper>
            </LandingContent>
        </LandingContainer>
    )
}

export default Landing;

const iconInitialAnimate = {
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
}

