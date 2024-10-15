import styled from "styled-components";
import {Link} from "react-router-dom";
import Calculator from "./Calculator.tsx";


const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: calc(4px + 1.5vw);
    font-family: "Arial Black", sans-serif;
    align-items: center;
    justify-content: center;,
        

`

const StyledDiv = styled.div`
    width: 95%;
    color: white;
    text-align: center;
    display: inline-block;

    
    img {
        border-radius: 100px;
        border: 5px solid seagreen;
        height: 25vh;
        align-items: center;
        filter: brightness(90%);
        
    }

    img:hover {
        border: 6px solid yellow;
        filter: brightness(110%);
        }
        
`;



export default function Projects (){

    return (
        <StyledDiv>

            <img src="./public/images/pfp.png" alt="Github Profile"/>
            <br/>
            <StyledLink to="https://github.com/jaquevan" target="_blank">Github - jaquevan </StyledLink>
            <br/><br/>
            <h4> Welcome to my projects page! Although uninhabited by fun interesting projects,
                I hope to fill it up with things I find interesting and can be proud of. Here you can find a link to
                my github profile, a simple JS calculator, and descriptions of projects.</h4>
            <br/>

            <Calculator />

        </StyledDiv>



    );
}

