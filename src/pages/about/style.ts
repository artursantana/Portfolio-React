import styled from "@emotion/styled";
import { FontColor, primeColor } from '../../app/Style'




export const Container = styled.div`

position: relative;
height: 500px;
padding: 25px;
overflow-y: scroll;


.buttonBottomPage{
    width: 110px;
    font-size: 15px;
    color: ${primeColor};
    background-color: transparent;
    margin-bottom: 15px;
    border-radius: 15px;
    
}

.buttonTopPage{
    font-size: 15px;
    color: ${primeColor};
    background-color: transparent;
    bottom: 0;
    border-radius: 15px;
    width: 110px;
 
}

`

export const SectionHeader = styled.div`

display: flex;
flex-direction: column;
img{
        border-radius: 15px;
    }
div{
    color: ${FontColor};
   h1{
    color: ${FontColor};
    span{
        color: ${primeColor};
    }
   
   }
    #SeeMore{
        flex-direction: column;
        text-align: center;
        align-items: center;
        background: none;
        
        .button{
            color: blue;
            cursor: pointer;
            &:hover{
                opacity: 0.6;
            }
        }
    }

    .show{
        height: 100px;
        overflow: hidden;
    }

}

.SocialMedia{
    margin: 25px 0 18px 0;
    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;
        a{
            text-decoration: none;
            color: ${FontColor};
        }

        svg{
            font-size: 50px;
            &:hover{
                color: ${primeColor};
                cursor: pointer;
            }
        }
    }
}


`

export const SectionSide = styled.div`

width: 100%;
height: auto;
background-color: ${FontColor};
border-radius: 15px;
padding: 5px;



h1{
    span{
        color: ${primeColor};
    }
}



`


export const SectionBottom = styled.div`

display: flex;
justify-content: center;
width: 100%;
height: 350px;

h1{
    display: flex;
    text-align: center;
    align-items: center;
    
    a{

        box-shadow: 1px 1px 1px ${primeColor};
        text-decoration: none;
        color: ${FontColor};
        span{
                color: ${primeColor};
           
        }
        &:hover{
            opacity: 0.5;
        }
       
    }
    
}



`




