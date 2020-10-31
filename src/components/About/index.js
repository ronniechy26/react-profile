import React from 'react'
import { 
    AboutContainer,
    AboutCol1Container,
    ImgBg,
    AboutH1,
    AboutContent,
    AboutImgBg,
    AboutDesc
} from './AboutELements';

const aboutmePic = require('../../images/aboutme.jpg');

const About = (props) => {
    return (
        <React.Fragment >
            <AboutContainer id={props.id}>
                <AboutCol1Container>
                    <AboutImgBg>
                        <ImgBg src={aboutmePic} />
                    </AboutImgBg>
                    <AboutContent>
                        <AboutH1>
                            About Me
                        </AboutH1>
                        <AboutDesc>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was p
                        </AboutDesc>
                    </AboutContent>
                </AboutCol1Container>
            </AboutContainer>
        </React.Fragment>
    )
}

export default About;
