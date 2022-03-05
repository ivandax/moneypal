import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Views
import { Welcome } from "./presentation/Welcome";
import { Main } from "./presentation/Main";

//Components
import { Header } from "./presentation/components/Header";

export interface Path {
    route: "/" | "/welcome";
    label: string;
}

const routes: Path[] = [
    { route: "/", label: "Panel" },
    { route: "/welcome", label: "Login" },
];

function App(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <Header routes={routes} />
                <Routes>
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path="/" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
