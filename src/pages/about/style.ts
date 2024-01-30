import styled from "@emotion/styled";




export const Container = styled.div`

position: relative;
height: 500px;
padding: 25px;
overflow-y: scroll;


.buttonTopPage{
    
    bottom: 0;
 
}

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

width: 100%;
height: 250px;


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
}



`




