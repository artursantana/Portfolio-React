import styled from "@emotion/styled";



export const Container = styled.div`
display: flex;
position: fixed;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: rgba(0,0,0,0.300);

`

export const Section = styled.div`
  margin: auto;
  position: relative;

  @media (max-width: 800px) {
    width: 450px;
  }
  width: 650px;
  height: 450px;
  background-color: white;
`;

export const ButtonModalClose = styled.button`

position: absolute;
background-color: transparent;
border: none;
cursor: pointer;
right: 0;
color: red;


`

