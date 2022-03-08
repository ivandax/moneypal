import React from "react";
import { RecoilRoot } from "recoil";
import { render, screen } from "@testing-library/react";
import { Main } from "./Main";

describe("Main tests", () => {
    test("Main Renders a Click Me Button", () => {
        render(
            <RecoilRoot>
                <Main />
            </RecoilRoot>
        );
        const button = screen.getByText(/Click Me/i);
        expect(button).toBeInTheDocument();
    });
});
