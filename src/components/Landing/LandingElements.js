import styled from 'styled-components';
import { Link } from 'react-scroll';
import { motion } from "framer-motion";
import {
    MdArrowForward,
    MdKeyboardArrowRight
} from 'react-icons/md';

export const LandingContainer = styled.div`
    display : flex;
    justify-content : left;
    width : 100%;
    height : 950px;
    text-align : center;
    align-items : center;
    z-index : 1;
    position : relative;
    
    :before{
        content : '';
        position : absolute;
        top: 0;
        left :0;
        right :0;
        bottom : 0;
        z-index : 2;
    }

    @media screen and (max-width : 768px){
        justify-content : center;
    }

    @media screen and (max-width : 480px){
        justify-content : center;
    }

` 

export const LandingImgBg = styled.div`
    position : absolute;
    top : 0;
    right : 0;
    bottom : 0;
    left : 0;
    width : 100%;
    height : 100%;
    overflow : hidden;
`

export const ImgBg = styled.img`
    width : 100%;
    height : 100%;
    object-fit : cover;
`

export const LandingContent =  styled.div`
    height : 360px;
    width : 800px;
    color : #fff;
    z-index : 3;
    margin-left : 100px;

    @media screen and (max-width : 768px){
        margin : 0px;
    }

    @media screen and (max-width : 480px){
        margin : 0px;
    }

`

export const LandingH1 = styled.h1`
    color : #fff;
    font-size : 60px;

    @media screen and (max-width : 768px){
        font-size : 50px;
    }

    @media screen and (max-width : 480px){
        font-size : 40px;
    }

`

export const LandingH2 = styled.h2`
    color : ${({colorBlue}) => (colorBlue ? '#00A3FF' : '#fff') };;
    font-size : 50px;
    display: inline;

    @media screen and (max-width : 768px){
        font-size : 40px;
    }

    @media screen and (max-width : 480px){
        font-size : 30px;
    }
`

export const LandingBtnWrapper = styled.div`
    margin-top : 30px;
`

export const LandingBtn = styled(Link)`
    border-radius : 50px;
    background : #00A3FF;
    white-space: nowrap;
    padding : 12px 24px;
    color : #fff;
    font-size : 18px;
    outline : none;
    border:none;
    cursor: pointer;
    transition : all 0.2s ease-in-out;

    @media screen and (max-width : 480px){
        font-size : 14px;
    }

    &:hover{
        transform : scale(2);
        font-weight : 700;
    }
`

export const ArrowForward =  styled(MdArrowForward)`
    font-size : 18px;
    margin-left : 8px;
 
    @media screen and (max-width : 480px){
        font-size : 14px;
    }

`

export const ArrowRight =  styled(MdKeyboardArrowRight)`
    font-size : 18px;
    margin-left : 8px;

    @media screen and (max-width : 480px){
        font-size : 14px;
    }
`

export const IconWrapper = styled.div`
    margin-top : 30px;
    display: flex;
    align-items : center;
    justify-content : center;
`

export const SocialMediaIcon = styled(motion.img)`
    height : 1.9rem;
    width : 1.9rem;
    margin-right : 1rem;
    margin-left : 1rem;
`