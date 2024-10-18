import styled from "styled-components";

const StyledDiv = styled.div`
    color: black;
    border: 4px solid black;
    display: flex;
    flex-direction: row;
    font-size: calc(4px + 1.5vw);

    text-align: center;

    img {
        height: 30vh;
        margin: 0;
        padding: 10px;
    }

    @media screen and (max-width: 750px) {
        display: block;
        align-content: center;
    }
`

export default function Music() {
    return (
        <StyledDiv>
            <h1>
                Here are some photos of me with my bass drum.
            </h1>
            <img alt="picture of me at band camp in 2024" src="../../public/images/soloshot.png"/>
            <h4>picture of me at band camp this past summer wearing my minion t-shirt</h4>
            <img alt="friends and family performance 2023" src="../../public/images/drumline2023.png"/>
            <h4>my team!</h4>
            <img alt="bassline band camp 2024" src="../../public/images/bassline.png"/>
            <h4>my dudes!</h4>
        </StyledDiv>
    );
}