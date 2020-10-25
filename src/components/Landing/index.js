import React, { useState } from 'react'
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


const Landing = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => setHover(!hover);

    return (
        <LandingContainer>
            <LandingImgBg>
                <ImgBg src={imgBg}/>
            </LandingImgBg>
            <LandingContent>
                <LandingH1>
                    Hi , I’m Ronnie.
                </LandingH1>
               <LandingH2>
                    {`I am a  `}
               </LandingH2>
               <LandingH2 colorBlue={true}>
                    Web Developer.
               </LandingH2>
               <LandingBtnWrapper>
                   <LandingBtn
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                   >
                        Contact { hover ? <ArrowForward/> : <ArrowRight/> }
                   </LandingBtn>
               </LandingBtnWrapper>
               <IconWrapper>
                    <SocialMediaIcon src={githubSvg} alt="github" />
                    <SocialMediaIcon src={fbSvg} alt="facebook" />
                    <SocialMediaIcon src={twitterSvg} alt="twitter" />
               </IconWrapper>
            </LandingContent>
        </LandingContainer>
    )
}

export default Landing;
