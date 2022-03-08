import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

const sum = (a: number, b: number): number => a + b;

test("simple jest sum", () => {
    expect(sum(4, 5)).toBe(9);
});

test("renders MoneyPal brand", () => {
    render(<App />);
    screen.debug();
    const brandElement = screen.getByText(/MoneyPal/i);
    expect(brandElement).toBeInTheDocument();
});
