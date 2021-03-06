import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Path, CustomTheme } from "../../App";

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }: CustomTheme): string => theme.headerColor};
    font-size: 1rem;
    padding: 0.5em 0.5em;
`;

const LinkContainer = styled.div`
    padding: 4px;
    margin-left: 20px;
    color: green;
`;

const Brand = styled.div`
    font-weight: bold;
    color: white;
    font-size: 1.5em;
    padding: 4px;
`;

interface HeaderProps {
    routes: Path[];
}

export function Header({ routes }: HeaderProps): JSX.Element {
    return (
        <Toolbar>
            <Brand>MoneyPal</Brand>
            {routes.map(({ route, label }) => (
                <LinkContainer key={route}>
                    <Link to={route} style={{ textDecoration: "none" }}>
                        {label}
                    </Link>
                </LinkContainer>
            ))}
        </Toolbar>
    );
}
