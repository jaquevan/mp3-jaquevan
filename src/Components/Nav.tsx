import styled from "styled-components";
import { Link } from "react-router-dom"


const StyledLink = styled(Link)`
text-decoration: none;
color: white;
font-size: calc(2px + 1vw),
`

const StyledNav = styled.nav`
    background-color: lawngreen;
    

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        
    }

    li {
        padding: 1% 15%;
        border: 3px solid lawngreen;
        border-radius: 5px;
        margin-bottom: 5vh;
    }

    @media screen and (max-width: 750px) {
        flex-direction: row;
        nav {
            width: 100%;

        }

        nav ul {
            list-style-type: none;
            flex-direction: row;
            width: 100%;
            text-align: center;
        }

        nav li {
            padding: 0 15%;
        }
    }

`
export default function Nav() {
    return (
        <>
            <StyledNav>
                <ul>
                    <StyledLink to={`/`}>Home</StyledLink>
                    <StyledLink to={`/education`}>Education</StyledLink>
                    <StyledLink to={`/work`}>Work</StyledLink>
                    <StyledLink to={`/projects`}>Projects</StyledLink>
                    <StyledLink to={`/achievements`}>Achievements</StyledLink>
                    <StyledLink to={`/music`}>Music</StyledLink>
                </ul>
        </StyledNav>
        </>
    )
}