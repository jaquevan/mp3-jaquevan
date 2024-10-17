import styled from 'styled-components'

const StyledDiv = styled.div`
font-size: calc(4px + 1.5vw);
padding-left: 2.5%;
    h2 {
        color: darkgreen;
        text-align: center;
        margin-bottom: .5%;
    }
    h4{
    text-align: center;
    color: rebeccapurple;
    margin: 0;
    }
    h3 {
        padding: 2%;
        text-align: center;
        color: black;
    }
`

export default function Achievements() {

    return (
        <StyledDiv>
        <h2>Boston Hacks 2023 - MLH Award</h2>
    <h4>November 2023</h4>

    <h3>Best Use of Streamlit</h3>
        <h3>Worked on the user interface and front end within a team</h3>

            <h3>Recognized at the event and received machine learning kit</h3>


            <h2>Isadore Wise Scholarship - $10,000 </h2>
            <h4>May 2022</h4>


            <h2>Menegay Family Computer Science Scholarship - $7,000</h2>
            <h4>May 2022</h4>


            <h2>BU Marching Band: Best Duo, Best at Tech Deck</h2>
            <h4>Fall 2023</h4>


            <h2>CT Seal of Biliteracy - Spanish and English </h2>
            <h4>May 2022</h4>
            <h3>Took proctored state spanish exam to be used as evidence of a language skill for potential employers
                after graduation</h3>
    </StyledDiv>
            );
            }