import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    color: yellow;
    
    border: 3px solid white;
    border-radius: 5px;
    
    padding-bottom: 1%;
    margin: 0 auto;
    text-align: left;
    width: 100%;

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
