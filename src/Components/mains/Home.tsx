import styled from "styled-components";

const StyledHome = styled.div`
    padding: 0 2%;
    text-align: center;
    font-size: calc(2px + 1.5vw);
    border: 4px solid black;

    
    h1, h2 { 
        color: rebeccapurple;
        text-underline: black;
    }
    
    p{
        padding-bottom: 5%;
    }

    img {
        display: block;
        max-width: 45vw;
        height: auto;
        margin: 5% auto;
        border-radius: 10%;
        border: 7px groove limegreen;
    }

    @media screen and (max-width: 750px) {
        font-size: 14px;
    }

`

export default function Home() {
    return (
        <StyledHome>
            <h1>About Me</h1>
            <img src=".//images/wdl.png" alt="Picture of Me"/>

            <p>My name is <b>Evan Jaquez</b>, and I am a junior at <b>Boston University</b> studying Computer Science &
                Economics
                with a minor in Data Science. I wish to pursue a career path in front-end development and am taking
                Web & App Development and Software Engineering courses this semester to learn more about the field.</p>


            <h2> Thank you for visiting my website :D </h2>
        </StyledHome>


    )
        ;
}