import styled from "styled-components";
import { Link } from "react-router-dom"


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: calc(4px + 1.5vw);
    font-family: Calibri, Arial, sans-serif;
    
    align-items: center;
    justify-content: center;
    
    width: 100%;
    height: 100%;,
`

const StyledNav = styled.nav`
    border: 4px dotted greenyellow;
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-bottom: 1.5%;
    box-sizing: border-box;
    
    

    ul {
        list-style-type: none;
        display: flex;
        flex-direction: column;
        padding: 0;
        width: 100%;
        align-items: center;
        
    }
    li :hover {
        border: 5px dotted black;
        padding: 4%;
        color: black;
        transform: scale(1.1);
    }

    li {
        border-radius: 5px;
        margin-bottom: 5vh;
        
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        height: auto;
        flex-direction: row;

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