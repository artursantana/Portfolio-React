



import styled from "@emotion/styled";



export const Container = styled.div`
padding: 25px;
height: 100%;

`
export const SectionTop = styled.div`

height: 100px;
text-align: left;


`
export const SectionBottom = styled.div`

width: 100%;
text-align: left;

.DivMainProjects{
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 25px;
    height: 250px;
    padding: 25px;

    div{
        margin: auto;
        width: 150px;
        height: 150px;
        background-color: #b3b3b3;
        cursor: pointer;
    }
}

`