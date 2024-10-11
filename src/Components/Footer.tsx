import styled from "styled-components";

const StyledFooter = styled.footer`
    background-color: lightgreen;
    color: white;
`
export default function Footer() {
    return (
        <>
            <StyledFooter>
                All Rights Reserved by Evan Jaquez
                 &copy;
            </StyledFooter>
        </>
    );
}