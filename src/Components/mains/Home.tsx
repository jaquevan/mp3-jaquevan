import styled from "styled-components";

const StyledHome = styled.div`
    padding: 0 2%;
    text-align: center;

    h1 {
        color: seagreen;
    }
    img {
        display: block;
        max-width: 45vw;
        height: auto;
        margin: 5% auto;
        border-radius: 10%;
        border: 7px groove limegreen;
    }
        
`

export default function Home (){
    return (
        <StyledHome>
            <h1>About Me</h1>
            <img alt="Picture of Me" src="public/images/wdl.png"/>

            <p>My name is <b>Evan Jaquez</b>, and I am a junior at <b>Boston University</b> studying Computer Science &
                Economics
                with a minor in Data Science. I wish to pursue a career path in front-end development and am taking
                Web & App Development and Software Engineering courses this semester to learn more about the field.</p>
        </StyledHome>


    )
        ;
}