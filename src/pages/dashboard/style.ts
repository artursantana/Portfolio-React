


import styled from "@emotion/styled";

import {  FontColor, primeColor } from '../../app/Style'
import { css } from "@emotion/react";


export const Container = styled.div`

display: flex;
flex-direction: column;
width: 100%;

color: ${FontColor};
padding: 5px;

@media (max-width: 500px) {
    background-color: #323232;
}


`

export const SideContainer = styled.div`
width: 100%;
p{
    font-size: 25px;
    span{
        font-size: 35px;
        font-weight: 700;
        span{
            color: ${primeColor};
        }
    }
}

`

export const AsideContainer = styled.div`

display: flex;

img{
    
    border-radius: 15px;
    
}

`

export const BoxContainer = styled.div<{responsivePage?: number}>`

display: flex;
margin: auto;
position: relative;
align-items: center;
justify-content: center;
img{
    width: 100%;
}


.moreProjects{
    display: flex;
    position: absolute;

    ${({responsivePage}) => (responsivePage || 0) < 450 ? css`

    bottom: 35px;
    left: -5px;
    
    `: css`

    bottom: 35px;
    left: -15px;

    `}


    
    width: 150px;
    height: 60px;
    border-radius: 15px;
    border: 3px solid ${primeColor};
    align-items: center;
    justify-content: center;
    color: #FFF;
    gap: 10px;

    &:hover{
       opacity: 0.5;
    }
    span{
        font-size: 25px;
        color: ${primeColor};
    }
}


.detailSkilss{
    display: flex;
    position: absolute;


    ${({responsivePage}) => (responsivePage || 0) < 450 ? css`

    top: 45px;
    right: -10px;
    
    `:css`
    top: 45px;
    right: -35px;
    `}
    
    width: 150px;
    height: 60px;
    border-radius: 15px;
    border: 3px solid ${primeColor};
    align-items: center;
    justify-content: center;
    color: #FFF;
    gap: 10px;

    &:hover{
       opacity: 0.5;
    }
    span{
        font-size: 25px;
        color: ${primeColor};
    }
}

`

export const BottomContainer = styled.div`

border-top: 3px solid #FFF;
margin-top: 10px;

.skills{
    margin-top: 15px;
    span{
        border: none;
        text-shadow: 1px 3px 5px black;
        text-align: center;
        transition: 0.4s;
        padding: 2px;
        border-radius: 5px;
 &:hover{
    box-shadow: 7px 5px 56px -14px #C3D900;
 }
 &:active{
    transform: scale(0.97);
    box-shadow: 7px 5px 56px -10px #C3D900;
 }
    }

    .html{
    background: orange;
    }
    .js{
    background: #FFEA00;
    } 
    .ts{
        background-color: #1F51FF;
    }
    .react{
    background: #89CFF0;
    }
    .next{
    background: black;
    }
    .css{
    background: blue;
    }
    .sass{
    background: hotpink;
    }
    .sc{
    background: rgb(191, 79, 116);
    }
    .emo{
    background: hotpink;
    }
    .sql{
    background: greenyellow;
    }
    .mysql{
    background: blueviolet;
    }
    .node{
    background: green;
    }
    .jquery{
    background: purple;
    }
}

`