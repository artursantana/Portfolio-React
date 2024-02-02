import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { FontColor, primeColor } from '../../../app/Style'


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
padding-top: 180px;

`:
css`
font-size: 15px;
`}

`

export const UlContainer = styled.ul`

padding: 15px;
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
span{ color: ${primeColor};

}

`


export const InsideSectionSide = styled.div<InsideSectionSideProps>`
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
        ${({loadingBar}) => (loadingBar || 0) < 1 ? css`
        width:0%;
        background-color: transparent;
        
        ` : css`
        transition: all 1s;
        width:100%;
        background-color: ${primeColor};
        height: 3px;
        bottom: 0;
        left: 0;
        `};
        

        

    }

}
   

  `
