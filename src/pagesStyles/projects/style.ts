import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";
import { primeColor } from "@/app/Style";


const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 70%);
  }
  50% {
    background-color: hsl(200, 20%, 95%);
  }
  100%{
    background-color: hsl(200, 20%, 70%);
  }
`;

export const Container = styled.div`
  padding: 25px;
  height: 100%;
`;

export const SectionTop = styled.div`

  height: 100px;
  text-align: left;

  h1{
    color: ${primeColor};
  }

`;

export const SectionBottom = styled.div`

  width: 100%;
  text-align: left;

`


export const MainProjects = styled.div<{responsivePage?:number}>`

    gap: 25px;
    padding: 15px;

  ${({responsivePage}) => (responsivePage || 0) < 650 ? css`
    overflow: scroll;
    flex-direction: column;
    height: 350px;
  `
  :
   css`
    display: grid;
    grid-template-columns: 2fr 2fr;
    
  `}

`

export const BoxProject = styled.div<{ skeleton?: number; responsivePage?: number }>`

 margin: auto;
 border-radius: 15px;

 ${({ responsivePage }) =>
  (responsivePage || 0) < 650
    ? css`
        width: 100%;
        height: 100%;
        margin-bottom: 30px;
      `
    : css`
    border: 3px solid ${primeColor};
        width: 280px;
        height: 150px;
      `};

  ${({skeleton}) =>
    skeleton === 0 ?
    css`
    animation: ${skeletonLoading} 1s infinite;
    cursor: progress;
    `
    : 
    css`

&.box1{

background-image: url('/ecommerce.png');
background-size: cover;
background-position: center;
}
&.box2{

background-image: url('/financeSystem.png');
background-size: cover;
background-position: center;
}
&.box3{

background-image: url('/teste.jpg');
background-size: cover;
background-position: center;
}
&.box4{

background-image: url('/teste.jpg');
background-size: cover;
background-position: center;
}
    
    &:hover{
      opacity: 0.7 ;
    }
    
    
    cursor: pointer;
    `}

   

`;