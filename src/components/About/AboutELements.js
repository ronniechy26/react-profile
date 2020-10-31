import styled from 'styled-components';


export const AboutContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
    height :900px;
    align-items : center;

    @media screen and (max-width : 768px){
        flex-direction : column;
       
    }

    @media screen and (max-width : 480px){
        flex-direction : column;

    }
` 

export const AboutCol1Container = styled.div`
    width : 50%;
    height :100%;
    background : #fff;
    overflow : hidden;
    position : relative;
    display : flex;
    flex-direction : column-reverse;
    align-items : flex-start;
`

export const AboutImgBg = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    overflow : hidden;
`

export const ImgBg = styled.img`
    z-index: 1;
    position : relative;
    width : 100%;
    height : 100%;
    object-fit : cover;
    filter: grayscale(100%);
`

export const AboutContent= styled.div`
    position : relative;
    z-index : 2;
    color : #fff;
    margin-left : 100px;
    margin-right : 50px;
    padding-bottom : 100px;

    @media screen and (max-width : 768px){
        margin-left : 70px;
        margin-right : 30px;
        padding-bottom : 80px;
    }

    @media screen and (max-width : 480px){
        margin-left : 50px;
        margin-right : 20px;
        padding-bottom : 50px;
    }

`

export const AboutH1 = styled.h2`
    color : #fff;
    font-size : 32px;
    padding-bottom : 10px;
    border-bottom : 3px solid #fff;
    max-width  : 180px;

    @media screen and (max-width : 768px){
        font-size : 24px;
        padding-bottom : 8px;
        border-bottom : 2px solid #fff;
        max-width  : 150px;
    }

    @media screen and (max-width : 480px){
        font-size : 18px;
        padding-bottom : 6px;
        border-bottom : 1px solid #fff;
        max-width  : 120px;
    }

`


export const AboutDesc = styled.p`
    margin-top : 20px;
    color : #fff;
    font-size : 18px;
    text-align : justify;

    @media screen and (max-width : 768px){
        font-size : 14px;
        margin-top : 10px;
    }

    @media screen and (max-width : 480px){
        font-size : 12px;
        margin-top : 8px;
    }

`