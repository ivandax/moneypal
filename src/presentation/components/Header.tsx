import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Path } from "../../App";

const Toolbar = styled.div`
    display: flex;
    align-items: center;
    background-color: lightblue;
    font-size: 1rem;
    padding: 1em 1em;
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
