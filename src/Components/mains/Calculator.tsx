import {useState} from "react";
import styled from "styled-components";


const StyledResult = styled.h3`
    font-size: 20px;
    font-family: Monospace, Arial, sans-serif;
`;

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
    
    output {
        font-size: 20px;
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

// create custom hook in order to reduce verbosity

function useCalculator() {
    // use useState
    const [result, setResult] = useState("");

    const calculate = (first: string, second: string, operator: string) => {
        let output; //can be an int or a string
        const firstValue = Number(first); //these must be ints
        const secondValue = Number(second);

        switch (operator) {
            case "+":
                output = firstValue + secondValue;
                break;

            case "-":
                output = firstValue - secondValue;
                break;

            case "*":
                output = firstValue * secondValue;
                break;

            case "/":
                output = firstValue / secondValue;
                break;

            case "pow":
                output = firstValue ** secondValue;
                break;
            default:
                output = "Invalid Operation";
        }

        setResult(String(output));
    };

    const clear = () => {
        setResult("");
    };
    //alows me to get shortcuts for result, calc function, and clear easily
    return { result, calculate, clear };
}





function Calculator() {
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");

    const {result, calculate, clear} = useCalculator();

    return (
        <StyledDiv>

            <h1>Vegeta's Saiyan Calculator</h1>
            <div className={"vegeta"}>
                <img src=".//images/vegeta_ssj_blue_2_transparent_by_ggreuz_dayf7hr-fullview.png" alt="Vegeta"/>
            </div>

            <p>Enter Two Powerful Numbers for Vegeta to do Mental Math!!</p>
            <input id="first" type="number" value={first} placeholder="First Number"
                   onChange={(e) => setFirst(e.target.value)}
            />
            <input id="second" type="number" value={second} placeholder="Second Number"
                   onChange={(e) => setSecond(e.target.value)}
            />

            <button onClick={() => calculate(first, second, "+")}>+</button>
            <button onClick={() => calculate(first, second, "-")}>-</button>
            <button onClick={() => calculate(first, second, "*")}>*</button>
            <button onClick={() => calculate(first, second, "/")}>/</button>
            <button onClick={() => calculate(first, second, "pow")}>pow</button>
            <button onClick={clear}>Clear</button>

            <StyledResult>
                {result && (
                    <h3 style={{color: Number(result) < 0 ? 'red' : 'white'}}>
                        {result}
                    </h3>
                )}
            </StyledResult>
        </StyledDiv>
    );
}

export default Calculator;
