import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Welcome } from "./presentation/Welcome";
import { Main } from "./presentation/Main";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/" element={<Main />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
