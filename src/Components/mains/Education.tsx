import styled from "styled-components";

const StyledDiv = styled.div`
font-size: calc(1px + 1.5vw);
padding-left: 2.5%;
    h1 {
        text-align: center;
        margin-bottom: 1rem;
    }
h2 {
    text-align: center;
    color: darkgreen;
    margin: 1% 0;
}
`

export default function Education() {

    return(
        <StyledDiv>
            <h1>Education</h1>
                    <h2>Bethel High School, Bethel CT</h2>
                    <h4>August. 2018 – June 2022</h4>
                        <ul>
                            <li><h3>Final Cumulative GPA: 4.2 </h3></li>
                            <li><h3>BHS Marching Band, Trumpet & Mellophone 1, Drum Major</h3></li>
                            <li><h3>Member of TRI-M, NHS, SNHS, WLHS, Jazz Band, Pit Orchesta, and Symphonic Band</h3></li>
                        </ul>
                            <h2>Boston University, Boston MA</h2>
                            <h2>BA in Computer Science and Economics</h2>
                            <h4>Jan. 2023 – May 2026</h4>
                                <ul>
                                    <li><h3>Current GPA: 3.5 </h3></li>
                                    <li><h3>BU Marching Band + Winter Drumline</h3></li>
                                    <li><h3>Film Lovers and Philosophers  Club</h3></li>
                                </ul>

            <h2>Notable Coursework</h2>
                <ul>
                    <li><h3>CS111/CS112 - Intro to Computer Science I, II</h3></li>
                    <li><h3>CS131 - Combinatoric Structures </h3></li>
                    <li><h3>CS132 - Geometric Algorithms </h3></li>
                    <li><h3>CS210 - Computer Systems </h3></li>
                    <li><h3>CS330 - Intro to Algorithm Analysis </h3></li>
                    <li><h3>CS411 - Software Engineering </h3></li>
                    <li><h3>CS391 - Website and App Development </h3></li>
                    <li><h3>DS219 - Software Engineering Career Prep </h3></li>
                    <li><h3>EC102/202 - Intro/Intermediate Macroeconomics </h3></li>
                </ul>
            <br/>
        </StyledDiv>
    );
}