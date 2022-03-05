import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, ThemeProps } from "styled-components";

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

const customTheme = { headerColor: "#00cc66" };

export type CustomTheme = ThemeProps<typeof customTheme>;

function App(): JSX.Element {
    return (
        <>
            <ThemeProvider theme={customTheme}>
                <BrowserRouter>
                    <Header routes={routes} />
                    <Routes>
                        <Route path="/welcome" element={<Welcome />} />
                        <Route path="/" element={<Main />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </>
    );
}

export default App;
