import styled from "styled-components";
import {Link} from "react-router-dom";
import Calculator from "./Calculator.tsx";


const StyledText = styled.div`
    border: 2px solid yellow;
    border-radius: 5px;
    background-color: black;
    padding: 1%;
    margin: auto 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    h4 {
        padding: 1%;
        background-color: dimgrey;
    }
`
const StyledDiv = styled.div`
    font-size: calc(4px + 1.5vw);
    color: white;
    text-align: center;
    display: inline-block;
    border: 4px solid black;

    h1 {
        text-align: center;
        margin-bottom: 1%;
        color: black;
    }
    .github img {
        border-radius: 100px;
        border: 5px solid seagreen;
        height: 35vh;
        width: auto;
        align-items: center;
        filter: brightness(90%);
        margin-top: 2%;

    }

    .github img:hover {
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

    @media screen and (max-width: 750px) {
        font-size: 14px;
        margin: auto;
        padding: 10px;

        .github img {
            height: 25vh;
        }

    }
`


export default function Projects() {

    return (
        <StyledDiv>
            <h1>Projects</h1>

            <div className={"github"}>
                <img src="/public/images/pfp.png" alt="Github Profile"/>
            </div>
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
                    my github profile, a simple JS calculator, and descriptions of projects.
                </h4>
            </StyledText>
            <br/><br/>
            <Calculator/>
        </StyledDiv>


    );
}

