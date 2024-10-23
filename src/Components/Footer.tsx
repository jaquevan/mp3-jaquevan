import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledFooter = styled.footer`
    background-color: black;
    color: limegreen;
    font-size: calc(4px + 1.5vw);
    margin: 1.5% 0;
    padding: 1%;
    
    border: 2px solid rebeccapurple;
    border-radius: 5px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    background-color: black;
    justify-content: center;
    width: 100%;

`
export default function Footer() {
    return (
        <>
            <StyledFooter>
                All Rights Reserved by Evan Jaquez,
                <StyledLink to={`/Credits`}> Credits </StyledLink>
                 &copy;
            </StyledFooter>
        </>
    );
}