import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";


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
`;

export const SectionBottom = styled.div`

  width: 100%;
  text-align: left;

`


export const MainProjects = styled.div`
display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 25px;
    height: 250px;
    padding: 25px;


`

export const BoxProject = styled.div<{ skeleton?: number }>`

  margin: auto;
  width: 150px;
  height: 150px;
  border-radius: 15px;

  ${(props) =>
    props.skeleton === 0 ?
    css`
    animation: ${skeletonLoading} 1s infinite;` 
    : 
    css`
    background-color: red;`}

  cursor: pointer;

`;