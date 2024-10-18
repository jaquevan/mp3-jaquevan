import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './Components/mains/Home.tsx';
import Projects from './Components/mains/Projects.tsx';
import Music from './Components/mains/Music.tsx';
import Work from './Components/mains/Work.tsx';
import Education from './Components/mains/Education.tsx';
import Achievements from './Components/mains/Achievements.tsx';
import Credits from './Components/mains/Credits.tsx';


import Nav from "./Components/Nav.tsx";
import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";
import styled from "styled-components";

// maintains a squeezed apperance of the web app
const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: 0 auto;
`;

// container which is used the routes and the nav to appear in a single container
const Container = styled.div`
    font-size: calc(3px + 2vw);
    font-family: Times, Arial, sans-serif;
    display: flex;
    flex-direction: row;
    //makes the main go bellow the nav
    @media screen and (max-width: 750px) {
        flex-direction: column;
    }

`;

function Root() {
    return (
        <PageWrapper>
            <Header/>
            <Container>
                <Nav/>
                <Routes>

                    <Route path={`/`}
                           element={<Home/>}
                    />
                    <Route path={`/work`}
                           element={<Work/>}
                    />
                    <Route path={`/projects`}
                           element={<Projects/>}
                    />

                    <Route path={`/education`}
                           element={<Education/>}
                    />
                    <Route path={`/achievements`}
                           element={<Achievements/>}
                    />
                    <Route path={'/music'}
                           element={<Music/>}>
                    </Route>

                    <Route path={'/credits'}
                           element={<Credits/>}>
                    </Route>

                </Routes>


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