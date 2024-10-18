import styled from "styled-components";
import {Link} from "react-router-dom"


const StyledLink = styled(Link)`
    color: white;
    background: black;
    text-decoration: none;
    padding: 1%;
    margin: auto;
    font-size: calc(4px + 1.5vw);
    font-family: monospace, Arial, sans-serif;

`

const StyledNav = styled.nav`
    border: 6px ridge greenyellow;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1% 4%;
    box-sizing: border-box;
    height: auto;
    background-color: black;

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        align-items: center;
        background-color: black;
        margin: auto 0;

    }

    li :hover {
        background-color: yellow;
        color: midnightblue;
    }

    li {
        border-radius: 10px;
        margin: 15% 0;
        padding: 3vh; //here i use vh to adjust to content amount and screen size for left side nav 
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        height: auto;
        flex-direction: row;
        margin-bottom: 1%;

        ul {

            flex-direction: row;
            justify-content: space-around;
            padding: 1%;
            width: 100%;
            text-align: center;
        }

        li {
            margin: 1%;
            padding: 0 ;

        }
    }

`;
export default function Nav() {
    return (
        <>
            <StyledNav>
                <ul>
                    <li><StyledLink to={`/`}>Home</StyledLink></li>
                    <li><StyledLink to={`/education`}>Education</StyledLink></li>
                    <li><StyledLink to={`/work`}>Work</StyledLink></li>
                    <li><StyledLink to={`/projects`}>Projects</StyledLink></li>
                    <li><StyledLink to={`/achievements`}>Achievements</StyledLink></li>
                    <li><StyledLink to={`/music`}>Music</StyledLink></li>
                </ul>
            </StyledNav>
        </>
    )
}