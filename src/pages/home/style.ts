



import styled from "@emotion/styled";



export const Container = styled.div`
padding: 25px;
height: 100%;

`
export const SectionTop = styled.div`

height: 100px;
text-align: left;

`


export const SectionSide = styled.div`

display: flex;
flex-direction: column;
text-align: left;

.skillsEmojis{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
     
}

.buttonBottomPage{
background-color: beige;
}


`


export const SectionBottom = styled.div`

width: 100%;
text-align: left;

.DivMain{
    
    height: 250px;
    padding: 25px;

    div{
        display: flex;
        justify-content: space-around;
        p{
            text-align: center;
            width: 50%;
        }

        .line{
            border-right: 1px solid black;
        }
       
    }
}

`