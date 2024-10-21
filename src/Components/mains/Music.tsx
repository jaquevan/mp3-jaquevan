import styled from "styled-components";

const StyledDiv = styled.div`
    color: black;
    font-size: calc(4px + 1.5vw);
    text-align: center;
    display: inline-block;
    border: 4px solid black;
    width: 100vw;
    
    h1 {
        text-align: center;
        margin-bottom: 1%;
    }
    
    img {
        width: auto;
        height: 20vw;
        margin: 0;
        padding: 10px;
    }

    @media screen and (max-width: 750px) {
        display: block;
        align-content: center;
        width: 100%;
    }
`

export default function Music() {
    return (
        <StyledDiv>
            <h1>Drumline</h1>
            <img alt="picture of me at band camp in 2024" src=".//images/bassline.png"/>
            <h4>bass drums</h4>
            <img alt="friends and family performance 2023" src=".//images/drumline2023.png"/>
            <h4>team</h4>
            <img alt="bassline band camp 2024" src=".//images/soloshot.png"/>
            <h4>solo shot</h4>
        </StyledDiv>
    );
}