import styled from "styled-components";

const StyledDiv = styled.div`
    font-size: calc(4px + 1.4vw);
    padding-left: 2.5%;
    padding-bottom: 2.5%;
    border: 4px solid black;
    
    h1 {
        text-align: center;
        margin-bottom: 1%;
    }
    
    h2 {
        text-align: center;
        color: darkgreen;
        margin: 1% 0;
    }
    h3 {
        
    }
    h4 {
        text-align: center;
        color: black;
        margin: 1% 0;
    }
    
    ul {
        list-style-type: square;
        margin-left: 2%;
    }

`
export default function Work() {

    return (
        <StyledDiv>

            <h1>Work Experience </h1>
            <h2>Software Developer Intern - Our National Conversation</h2>
            <h4>(July 2024 – Present)</h4>
            <ul>
                <li><h3>Developed and maintain ONC website as a full stack developer</h3></li>
                <li><h3>Used Python to construct back end aggregator to improve site speed</h3></li>
                <li><h3>Used UI/UX designs from Figma and implemented them using React</h3></li>
            </ul>

            <h2>Information Technology Support Specialist (LETS)- Boston University</h2>
            <h4>(August 2024 – October 2024)</h4>
            <ul>
                <li><h3>Part of the LETS team where we set up campus computers used on campus</h3></li>
                <li><h3>Assess and troubleshoot computer problems presented by faculty in lectures</h3></li>
                <li><h3>Maintain upkeep of computers, classroom equipment, and AV systems across campus</h3></li>
            </ul>

            <h2>Sales Associate/Floor Leader - Skechers</h2>
            <h4>(September 2022 – September 2024)</h4>
            <ul>
                <li><h3>Completed transactions at the register and consistently signed up the most
                    customers to the stores rewards program</h3>
                </li>
                <li><h3>Helped translate for Spanish-speaking customers</h3></li>
                <li><h3>Organized the flow of the sales floor and set up store displays</h3></li>
            </ul>

            <h2>Sales Associate - Sierra Trading Post</h2>
            <h4>(June 2022 – September 2022)</h4>
            <ul>
                <li><h3>Worked primarily at the register and promoted TJX rewards card to customers</h3></li>
                <li><h3>Processed weekly store shipments</h3></li>

            </ul>

            <h2>Student Desk Assistant - Boston University</h2>
            <h4>(August 2023 – Present)</h4>
            <ul>
                <li><h3>Work study position where I oversee a lounge at the College of General Studies</h3></li>

            </ul>

        </StyledDiv>
    );
}