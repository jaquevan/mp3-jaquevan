import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    background-color: darkseagreen;
    color: black;
    font-size: calc(4px + 1.5vw);
    padding: 1%;
    margin-top: 1.5%;
    border: 2px solid black;
    border-radius: 5px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: darkseagreen;
    justify-content: center;
    width: 100%;

`
export default function Footer() {
    return (
        <>
            <StyledFooter>
                All Rights Reserved by Evan Jaquez,
                <StyledLink to={`/Credits`}> Credits</StyledLink>
                &copy;
            </StyledFooter>
        </>
    );
}