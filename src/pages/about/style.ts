import styled from "@emotion/styled";




export const Container = styled.div`

height: 500px;
padding: 25px;
overflow-y: scroll;


`

export const SectionHeader = styled.div`

display: flex;
flex-direction: column;

div{
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
    margin: 25px 0 25px 0;
    ul{
        display: flex;
        justify-content: space-around;
        list-style: none;

        svg{
            font-size: 50px;
        }
    }
}


`

export const SectionSide = styled.div`

background-color: yellow;
width: 100%;
height: 250px;


`


export const SectionBottom = styled.div`

position: relative;
width: 100%;
height: 350px;
background-color: antiquewhite;



.buttonTopPage{
    position: fixed;
    
    
    opacity: 0;
}

`




