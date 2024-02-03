


import styled from "@emotion/styled";

import {  FontColor, primeColor } from '../../app/Style'


export const Container = styled.div`

display: flex;
flex-direction: column;
width: 100%;
color: ${FontColor};
padding: 25px;


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



export const BoxContainer = styled.div`

display: flex;
margin: auto;
margin-top: 25px;
position: relative;
align-items: center;
justify-content: center;



.moreProjects{
    display: flex;
    position: absolute;
    bottom: -35px;
    left: -55px;
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
    top: -35px;
    right: -55px;
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
margin-top: 60px;


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