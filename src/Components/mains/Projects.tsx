import styled from "styled-components";
import {Link} from "react-router-dom";
import Calculator from "./Calculator.tsx";

const StyledText = styled.div`
    border: 2px solid  yellow;
    border-radius: 5px;
    background-color: black;
    padding: 1%;
    margin: auto 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    
    h4{
        padding: 1%;
        background-color: dimgrey;

    }
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

    button {
        border: 4px solid yellow;
        border-radius: 5%;
        padding: 3%;
    }

    button:hover {
        background-color: darkslateblue;
        transform: scale(1.1);
    }


    button:hover a {
        background-color: darkslateblue; 
        color: white;
    }

    button a {
        text-decoration: none;
        color: black;
        display: inline-block;
    }
`;



export default function Projects (){

    return (
        <StyledDiv>

            <img src="./public/images/pfp.png" alt="Github Profile"/>

            <br/>

            <button>
                <Link to="https://github.com/jaquevan"
                      target="_blank">Github - jaquevan
                </Link>

            </button>

            <br/><br/>
            <StyledText>
            <h4> Welcome to my projects page! Although uninhabited by fun interesting projects,
                I hope to fill it up with things I find interesting and can be proud of. Here you can find a link to
                my github profile, a simple JS calculator, and descriptions of projects.</h4>
            </StyledText>
            <br/><br/>
            <Calculator/>
        </StyledDiv>


    );
}

