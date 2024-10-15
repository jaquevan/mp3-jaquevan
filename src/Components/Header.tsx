import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 100%;
    
    //found how to change the text to look rised for more readable fun colors
    //in the documentation for text sahdow
    color: sandybrown;
    text-shadow: -1px 2px 0 black;
    
    
    border: 3px solid black;
    border-radius: 5px;
    padding-bottom: 1%;
    margin: 1% auto;
    

    @media screen and (max-width: 750px) {
        text-align: center;
    }
`;

export default function Header() {
    return (
        <>
            <StyledHeader>
                <h1>Evan Jaquez</h1>
                <h3>Welcome to my inner vortex :D</h3>
            </StyledHeader>
        </>
    );
}
