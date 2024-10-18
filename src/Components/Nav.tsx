import styled from "styled-components";
import { Link } from "react-router-dom"


const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    
    background: black;
    padding:0;
    margin-right: 1%;
    
    font-size: calc(4px + 1.5vw);
    font-family: Calibri, Arial, sans-serif;
    
    align-items: center;
    justify-content: center;
    
    width: auto;
    height: 100%;,

    
`

const StyledNav = styled.nav`
    border: 6px ridge greenyellow;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1% 4%;
    box-sizing: border-box;
    
    
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
        border: 3px ridge lawngreen;
        color: midnightblue;
        transform: scale(1.02);
    }

    li {
        border-radius: 5px;
        margin-bottom: 5vh;
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
             padding: .2% 3%;
             
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