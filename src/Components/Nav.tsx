import styled from "styled-components";
import { Link } from "react-router-dom"

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
            <nav>
                <ul>
                        <Link to={`/public`}>Home</Link>
                        <Link to={`/education`}>Education</Link>
                        <Link to={`/work`}>Employment</Link>
                        <Link to={`/projects`}>Projects</Link>
                        <Link to={`/achievements`}>Achievements</Link>
                        <Link to={`/music`}>Music</Link>
                </ul>
            </nav>
        </StyledNav>
        </>
    )
}