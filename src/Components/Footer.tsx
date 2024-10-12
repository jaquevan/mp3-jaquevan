import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    background-color: lightgreen;
    color: white;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: lightgreen;
    font-size: calc(4px + 1.5vw);
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;,
`
export default function Footer() {
    return (
        <>
            <StyledFooter>
                All Rights Reserved by Evan Jaquez
                <StyledLink to={`/Credits`}> Credits</StyledLink>
                &copy;
            </StyledFooter>
        </>
    );
}