import styled from "@emotion/styled";
import { css } from "@emotion/react";


export const Container = styled.div<{responsivePage?:number}>`

display: flex;
flex-direction: column;
${({responsivePage}) => (responsivePage || 0) < 650 ? css`
overflow: scroll;
height: 350px;
font-size: 15px;
padding: 25px;
`:
css`
color:black;
`}





`

export const SectionContainer = styled.div<{responsivePage?:number}>`

gap: 15px;

${({responsivePage}) => (responsivePage || 0) < 650 ? css`

display: flex;
flex-direction: column;

`:
css`
font-size: 15px;
`}

`

export const UlContainer = styled.ul`

padding: 15px;

li{
    
    p{
        width: 200px;
    }
}


`

export const AsideContainer = styled.div`
display: flex;
flex-direction: column;

li{
    
}

`

export const SectionContainerBottom = styled.div<{responsivePage?:number}>`
display: flex;
flex-direction: column;

${({responsivePage}) => (responsivePage || 0) < 650 ? css`
text-align: left;
`:
css`
text-align: center;
`}



`






                    /* Styles from component Skilss */





                    


export const SectionSide = styled.div`

display: flex;
flex-direction: column;
text-align: left;


`


export const InsideSectionSide = styled.div<{responsivePage?:number}>`
display: flex;
flex-direction: column;
margin-top: 15px;


${({responsivePage}) => (responsivePage || 0) < 650 ? css`
width: 300px;
`:

css`

`}


p{
    margin-top: 30px;
    height: 30px;
    position: relative;
    &::after{
        content: '';
        position: absolute;
        width: 0%;
        height: 3px;
        bottom: 0;
        left: 0;

        background-color: transparent;

    }
    &:hover::after {
        transition: all 0.5s;
        width: 100%;
        background-color: blueviolet;
   
  }




}


`