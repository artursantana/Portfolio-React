import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { primeColor } from '../../../app/Style'


type InsideSectionSideProps = {
    responsivePage?: number;
    loadingBar?: number;
  };


export const Container = styled.div<{responsivePage?:number}>`

display: flex;
flex-direction: column;
span{
        color: ${primeColor};
    }
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
font-size: 10px;
padding-top: 35px;

`:
css`
font-size: 15px;
`}

`

export const UlContainer = styled.ul`

@media (max-width: 550px) {
    margin-top:60px ;
}
h1{
    span{
        color: ${primeColor};
    }
    
}

li{
    
    
    p{
        color: ${primeColor};
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
font-size: 12px;
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
overflow-y: scroll;
height: 400px;
span{ color: ${primeColor};

}


`


export const InsideSectionSide = styled.div<InsideSectionSideProps>`

display: flex;
flex-direction: column;
margin-top: 35px;



${({responsivePage}) => (responsivePage || 0) < 650 ? css`

font-size: 12px;
margin-top: 270px;
`:

css`
padding-top: 70px;
`}


div{
    display:flex;
    flex-direction:column;
    position: relative;
    margin-top:40px;
    &::after{
        content: '';
        position: absolute;
        ${({loadingBar}) => (loadingBar || 0) < 1 ? css`
        width:0%;
        background-color: transparent;
        
        ` : css`
        transition: all 1s;
        width:95%;
        background-color: ${primeColor};
        height: 3px;
        bottom: 0;
        left: 0;
        `};
        

        

    

}}
   

  `
