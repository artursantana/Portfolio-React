

import styled from "@emotion/styled";


export const Container = styled.div`
display: flex;
margin: auto;
width: 1080px;
height: 600px;
justify-content: center;
gap: 30px;
padding: 15px;
text-align: center;
align-items: center;
justify-content: center;


`
export const Section_Left = styled.div`

width: 250px;
height: 550px;
background-color: #FFF;
border-radius: 15px;
box-shadow: 1px 1px 5px 1px;

.resume{

    p{
        margin: 20px auto 20px auto;
        border-radius: 30px;
        width: 150px;
        background-color: rgba(0,0,0,0.100);
    }

    .downloadresume{
        display: flex;
        margin: auto;
        gap: 5px;
        border-radius: 30px;
        background-color: rgba(0,0,0,0.100);
        width: 150px;
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
    background-color: rgba(0,0,0,0.100);

    .information{
    display: flex;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

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
    margin-top: 25px;
    gap: 15px;

    button{
        width: 150px;
        padding: 10px;
        border-radius: 15px;
        
    }
}








`
export const Section_Right = styled.div`

width: 650px;
height: 550px;
background-color: blue;
border-radius: 15px;
box-shadow: 1px 1px 5px 1px;


`