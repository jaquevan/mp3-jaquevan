import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Components/Nav.tsx';
import Work from './Components/Nav.tsx';
import Projects from './Components/Nav.tsx';
import Education from './Components/Nav.tsx';

;
import Achievements from './Components/Nav.tsx';
import Music from './Components/Nav.tsx';

import Nav from "./Components/Nav.tsx";
import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";
import styled from "styled-components";


const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: 0 auto;
`;


const Container = styled.div`
    font-size: calc(3px + 2vw);
    font-family: Times, Arial, sans-serif;
    display: flex;
    flex-direction: row;

`;

function Root() {
    return (
        <PageWrapper>
            <Header/>
            <Nav/>
                <Routes>
                    <Route path={`/public`}
                           element={<Home/>}>
                    </Route>
                    <Route path={`/work`}
                           element={<Work/>}>
                    </Route>

                    <Route path="/projects"
                           element={<Projects/>}
                    />

                    <Route path="/education"
                           element={<Education/>}
                    />

                    <Route path="/achievements"
                           element={<Achievements/>}
                    />

                    <Route path="/music"
                           element={<Music/>}
                    />
                </Routes>
            <Container>

            </Container>
            <Footer/>

        </PageWrapper>

    );
}

const router = createBrowserRouter(
    [{path: "*", Component: Root}]
);

export default function App() {
    return (
        <>

            <RouterProvider router={router}/>

        </>
    );
}