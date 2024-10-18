import styled from "styled-components";

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

    img {
        position: absolute;
        width: 18%; 
        max-width: 60px; /* Limit the max width */
        left: 85%; /* Position it relative to the header */
        top: 5.5%;
        z-index: 1;
    }

    @media screen and (max-width: 750px) {
        text-align: center;
        img {
            width: 15%; /* Smaller width for smaller screens */
            max-width: 50px;
            left: 80%;
            top: 4%;
            
        }
    }
`;

export default function Header() {
    return (
        <>
            <StyledHeader>
                <img src=".//images/Classic_dart_monkey.webp" alt="Monkey"/>

                <h1>Evan Jaquez</h1>
                <h3>Welcome to My Inner Vortex</h3>
            </StyledHeader>
        </>
    );
}
