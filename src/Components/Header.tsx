// import { useState } from 'react';
// import { useEffect } from 'react';
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    text-align: left;
    color: yellow;

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
