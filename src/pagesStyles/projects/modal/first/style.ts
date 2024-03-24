

import styled from "@emotion/styled";
import { primeColor } from '../../../../app/Style'



export const Container = styled.div`


`

export const ImageContainer = styled.div`

width: 100%;
height: 300px;
background-color: #323232;
display: flex;

img{
  width: 100%;
  @media (max-width: 600px) {

      width: 100%;
  }
}

`

export const SectionMain = styled.div`

display: flex;
flex-direction: column;
justify-content: space-around;

@media (max-width: 500px) {
          flex-direction: row;
  }


`

export const SectionImgTechs = styled.div`



display: flex;
margin: -10px 0 10px 0;
justify-content: space-around;

img{
   
    align-items: center;
    justify-content: center;
}

@media (max-width: 500px) {

flex-direction: column;

}


`

export const SectionButton = styled.div`
display: flex;

a{
    margin: auto;
    align-items:center;
    justify-content:center;
}

@media (max-width: 500px) {
    flex-direction: column;
  }

button{
        margin: auto;
        width: 160px;
        height:50px;
        background-color:transparent;
        border-radius:10px;
        border:3px solid #323232;
        background-color: white;
        font-size:20px;
       
        cursor: pointer;
        transition:all 0.5s;
        
        &:hover{
          width: 162px;
          height:52px;
          opacity:0.4;
        }
        @media (max-width: 800px) {
          width: 100px;
          height:40px;
  }
        @media (max-width: 500px) {
          width: 100px;
          height:40px;
  }
       
  }



`
