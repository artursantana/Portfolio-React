

import styled from "@emotion/styled";
import { css } from "@emotion/react";


export const Container = styled.div<{ responsivePage?: number }>`

display: flex;
margin: auto;

${({responsivePage}) =>
    (responsivePage || 0) > 930
      ? css`
          flex-direction: row;
          max-width: 1000px;
        `
      : css`
          flex-direction: column;
          max-width: 100%;

        `};

justify-content: center;
gap: 30px;
padding: 15px;
text-align: center;
align-items: center;
justify-content: center;

`
export const Section_Left = styled.div<{ responsivePage?: number }>`

height: 90vh;
background-color: #FFF;
border-radius: 15px;
box-shadow: 1px 1px 5px 1px;
color: #b3b3b3;

${({responsivePage}) => (responsivePage || 0) > 350 ? css`

width: 350px;

`:
css`

width: 100%;

`}

left: 0;



.resume{

    p{
        margin: 20px auto 20px auto;
        border-radius: 15px;
        width: 200px;
        background-color: #323232;
    }

    .downloadresume{
        display: flex;
        margin: auto;
        gap: 5px;
        border-radius: 15px;
        background-color: #323232;
        width: 200px;
        cursor: pointer;
        svg{
            width: 12px;
        }
    }
}

.socialMedia{
   display: flex;
   margin: 20px auto 20px auto;
   justify-content: space-around;
   width: 100%;

   svg{
    width: 50px;
   }
}

.Maininformation {
    background-color: #323232;

    .information{
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    padding: 5px;

        svg{
            width: 15px;
        }
    }
    p{
        margin-top: 25px;
    }
}

.buttons{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    gap: 15px;

/* CSS */
button {
  appearance: none;
  background-color: #323232;
  border: 2px solid #1A1A1A;
  border-radius: 15px;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  outline: none;
  padding: 5px;
  text-align: center;
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 65%;
  will-change: transform;
}

button:disabled {
  pointer-events: none;
}

button:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

button:active {
  box-shadow: none;
  transform: translateY(0);
}

}

`


export const Section_Right = styled.div<{responsivePage?: number}>`

${({responsivePage}) => (responsivePage || 0) > 650 ? css`
width: 650px;
`: css`
width: 100%;
`} ;

height: 90vh;
background-color: #FFF;
border-radius: 15px;
box-shadow: 1px 1px 5px 1px;




`



