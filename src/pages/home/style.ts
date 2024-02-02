


import { primeColor, FontColor } from '../../app/Style'
import styled from "@emotion/styled";




export const Container = styled.div`
padding: 25px;
height: 100%;

color: ${primeColor};

`
export const SectionTop = styled.div`


height: 100px;
text-align: left;

`



export const SectionBottom = styled.div`


width: 100%;
text-align: left;


.DivMain{
    
    height: 250px;
    padding: 25px;

    div{
        color: ${FontColor};
        display: flex;
        justify-content: space-around;
        p{
            
            text-decoration: none;
            
        }

        #line{
            text-align: center;
            width: 50%;
        }
       
    }
}

`