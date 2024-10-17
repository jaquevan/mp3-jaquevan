import styled from "styled-components";

const StyledDiv = styled.div`
    color: black;
`

export default function Music (){
    return (
        <StyledDiv>
            <p>
                In High School I did Marching Band for 4 years and was the Drum Major of the Band.
            </p>

            <p>When I got to BU I decided to try drumming and I have fallen in love with the activity and the
                process</p>
            <div className="drumming-photos">
                <img alt="picture of me at band camp in 2024" src="../../public/images/soloshot.png"/>
                <h4>picture of me at band camp this past summer wearing my minion t-shirt</h4>
                <img alt="friends and family performance 2023" src="../../public/images/drumline2023.png"/>
                <h4>my team!</h4>
                <img alt="bassline band camp 2024" src="../../public/images/bassline.png"/>
                <h4>my dudes!</h4>
            </div>

            <h2>Drumming Progression</h2>
            <p>You can view some of my drumming progression
                <a href="https://drive.google.com/drive/folders/1-2iz7mueSPIqLF_f45EU5CdF0gJ4dJKG?usp=drive_link"> here
                </a>.
            </p>
        </StyledDiv>
            );
            }