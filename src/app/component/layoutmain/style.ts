

import { ColorContainer, FontColor,primeColor } from '../../Style'
import styled from "@emotion/styled";
import { css } from "@emotion/react";



export const Container = styled.div<{ responsivePage?: number }>`

display: flex;
margin: auto;
justify-content: center;
gap: 30px;
padding: 15px;
text-align: center;
align-items: center;
justify-content: center;


${({responsivePage}) =>
    (responsivePage || 0) > 930 ? css`
          flex-direction: row;
          max-width: 1000px;

        `
      : css`
          flex-direction: column;
          max-width: 100%;
        `}

`
export const Section_Left = styled.div<{ responsivePage?: number }>`

background-color: #FFF;
border-radius: 15px;
box-shadow: 1px 1px 5px 1px black;
color: ${primeColor};
height: 600px;

${({responsivePage}) => (responsivePage || 0) > 350 ? css`

width: 300px;

`:
css`

width: 100%;

`}




.resume{

h1{
    margin-top:25px;
    text-shadow: 1px 1px 3px ${ColorContainer};
    font-size:55px;
}
    p{
        display:flex;
        margin: 20px auto 20px auto;
        
        justify-content:center;
        align-items:center;
        color:${ColorContainer};
    }
    
}

.socialMedia{
    
   display: flex;
   margin: 20px auto 20px auto;
   justify-content: space-around;
   width: 100%;
   

   svg{
    width: 50px;
   }
}

.Maininformation {
    background-color: ${ColorContainer};
    span{
      color:${FontColor};
    }

    .information{
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    padding: 5px;

    

        svg{
            width: 15px;
            color:hotpink;
        }
    }


    .information2{
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    padding: 5px;

    

        svg{
            width: 15px;
            color:green;
        }
    }


    p{
        margin-top: 25px;
    }
}

.buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    gap: 15px;

    button{
        display: flex;
        margin: auto;
        width: 200px;
        height:50px;
        gap: 5px;
        background-color:transparent;
        border-radius:10px;
        border:3px solid ${ColorContainer};
        font-size:20px;
        align-items:center;
        justify-content:center;
        cursor: pointer;
        transition:all 0.5s;
        svg{
          color:${primeColor};
            width: 20px;
        }
        &:hover{
          width: 220px;
          height:60px;
          opacity:0.2;
        }
       

        }
        
    }


`


export const Section_Right = styled.div<{responsivePage?: number}>`

background-color: ${ColorContainer};
border-radius: 15px;
box-shadow: 1px 1px 5px 1px;
height: 600px;

${({responsivePage}) => (responsivePage || 0) > 650 ? css`
width: 650px;

`: css`
width: 100%;

`} ;



`

