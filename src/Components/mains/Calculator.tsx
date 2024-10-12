import  { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: block;
    flex-direction: column;
    color: white;
    
    button{
        background:lightskyblue;
        margin: 2%;
        padding-left: 1%;
        border: 2px solid yellow;
        border-radius: 80px;
    }
    button:hover{
        color: white;
        background-color: darkslateblue;
    }

    @media screen and (max-width: 750px) {
        .calculator label, input{
            display:flex;
            flex-direction: column;
            padding-bottom: 2%;
        }
    }
`;

function Calculator(){
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState("");

    function displayResult(output: number) {
        setResult(output < 0 ?

            <h3 style={{ color: 'red' }}>{output}</h3>

            : <h3>{output}</h3>);
    }

    function getInputs(): { firstValue: number; secondValue: number } {
        const firstValue = Number(first);
        const secondValue = Number(second);
        return { firstValue, secondValue };
    }

    function myAdd(): void {
        const { firstValue, secondValue } = getInputs();
        const result = (firstValue + secondValue);
        displayResult(result);
    }

    function mySub(): void {
        const { firstValue, secondValue } = getInputs();
        const result = firstValue - secondValue;
        displayResult(result);
    }

    function myMultiply(): void {
        const { firstValue, secondValue } = getInputs();
        const result = firstValue * secondValue;
        displayResult(result);
    }

    function myDivide(): void {
        const { firstValue, secondValue } = getInputs();
        const result = firstValue / secondValue;
        displayResult(result);
    }

    function myPow(): void {
        const { firstValue, secondValue } = getInputs();
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
