import styled from "styled-components";

const StyledLogo = styled.div`
    display: block;
    width: 75px;  
    height: 75px; 
    border: 3px solid black;
    border-radius: 50%;
    margin-top: 1%;
    background-color: lavender;
    

    img {
        width: 100%; 
        height: auto;
        padding: 5%;
    }

    @media screen and (max-width: 750px) {
        width: 65px;
        height: 66px;
        margin: 1% auto;
        img {
            width: 100%;
        }
    }
`;


const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    padding-left: 1%;

    //found how to change the text to look rised for more readable fun colors
    //in the documentation for text sahdow
    color: lightgreen;
    text-shadow: -1px 2px 0 black;

    background: linear-gradient(to bottom,
    lightsteelblue,
    cadetblue,
    steelblue,
    teal,
    white);


    border: 4px ridge darkgreen;
    border-radius: 5px;
    padding-bottom: 1%;
    margin: 2% auto;



    @media screen and (max-width: 750px) {
        text-align: center;
        
    }
`;

export default function Header() {
    return (
        <>
            <StyledHeader>
                <StyledLogo>
                    <img src=".//images/Classic_dart_monkey.webp" alt="Monkey"/>
                </StyledLogo>

                <h1>Evan Jaquez</h1>
                <h3>Welcome to My Inner Vortex</h3>
            </StyledHeader>
        </>
    );
}
