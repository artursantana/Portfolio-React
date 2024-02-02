

import styled from "@emotion/styled";
import { primeColor } from '../../../../../app/Style'



export const Container = styled.div`

`

export const ImageContainer = styled.div`

width: 100%;
height: 300px;
background-color: #323232;

`

export const Section = styled.div`
display: flex;

button{
        margin: auto;
        width: 160px;
        height:50px;
        background-color:transparent;
        border-radius:10px;
        border:3px solid #323232;
        font-size:20px;
        align-items:center;
        justify-content:center;
        cursor: pointer;
        transition:all 0.5s;
        
        &:hover{
          width: 162px;
          height:52px;
          opacity:0.2;
        }
       

        }

.techs{

    display: flex;
    

}

`
