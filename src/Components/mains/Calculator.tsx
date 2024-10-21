import {useState} from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    color: white;
    background: url(".//images/clip-lightning-gif-background-15.gif");
    border-radius: 15px;
    font-size: calc(2px + 1vh);
    padding: 1% 0;


    h1 {
        color: black;
        background: yellow;
        border-radius: 15px 15px 0 0;
    }

    .vegeta img {
        height: 30vh;
        border: none;
    }

    label, input {
        display: block;
        margin: 2% auto;
        padding: 1%;
        border: 3px solid yellow;
        border-radius: 5%;
        background-color: lightskyblue;
    }

    button {
        background: lightskyblue;
        font-family: "Agave Nerd Font", Arial, sans-serif;
        margin: 1.5%;
        padding: 3% 2%;
        border: 2px solid yellow;
        border-radius: 8px;
    }

    button:hover {
        color: white;
        background-color: darkslateblue;
    }

    @media screen and (max-width: 750px) {
        width: 90vw;

        button {
            margin: 1.5%;
            padding: 2% 1.7%;
        }

        label, input {
            display: flex;
            margin: 5% 35%;

        }
    }

    @media screen and (max-width: 750px) {
        width: 95%;
        margin: auto;
        padding: 10px;

        label, input {
            display: block;
            padding: 10px;
            margin: 2% auto;
        }
    }
`;

function Calculator() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");

    function displayResult(output: number) {
        setResult(String(output));

        return (
            <div className={"calcResult"}>
                {Number(result) < 0 ? (
                    <h3 style={{color: 'red'}}>{result}</h3>
                ) : (
                    <h3>{result}</h3>
                )}
            </div>
        );
    }

    function getInputs(): { firstValue: number; secondValue: number } {
        const firstValue = Number(first);
        const secondValue = Number(second);
        return {firstValue, secondValue};
    }

    function myAdd(): void {
        const {firstValue, secondValue} = getInputs();
        const result = (firstValue + secondValue);
        displayResult(result);
    }

    function mySub(): void {
        const {firstValue, secondValue} = getInputs();
        const result = firstValue - secondValue;
        displayResult(result);
    }

    function myMultiply(): void {
        const {firstValue, secondValue} = getInputs();
        const result = firstValue * secondValue;
        displayResult(result);
    }

    function myDivide(): void {
        const {firstValue, secondValue} = getInputs();
        const result = firstValue / secondValue;
        displayResult(result);
    }

    function myPow(): void {
        const {firstValue, secondValue} = getInputs();
        let result = 1;

        for (let i = 0; i < secondValue; i++) {
            result *= firstValue;
        }
        displayResult(result);
    }

    function myClear(): void {
        setFirst("");
        setSecond("");
        setResult("");
    }

    return (
        <StyledDiv>

            <h1>Vegeta's React Calculator</h1>
            <div className={"vegeta"}>
                <img src=".//images/vegeta_ssj_blue_2_transparent_by_ggreuz_dayf7hr-fullview.png" alt="Vegeta"/>
            </div>
            <input
                id="first"
                type="number"
                value={first}
                placeholder="First Number"
                onChange={(e) => setFirst(e.target.value)}
            />
            <input
                id="second"
                type="number"
                value={second}
                placeholder="Second Number"
                onChange={(e) => setSecond(e.target.value)}
            />

            <button onClick={myAdd}>+</button>
            <button onClick={mySub}>-</button>
            <button onClick={myMultiply}>*</button>
            <button onClick={myDivide}>/</button>
            <button onClick={myPow}>pow</button>
            <button onClick={myClear}>Clear</button>
            <div id="output">{result}</div>
        </StyledDiv>
    );
}

export default Calculator;
