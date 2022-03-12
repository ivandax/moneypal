import * as React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

// Types
import { ExpenseEntry } from "../services/types";

// State
import { expensesState } from "../State";

// Components
import { ExpenseCreator } from "./components/Creator";

const Content = styled.div`
    width: "100%";
    display: "flex";
    flex-direction: "column";
    padding: 12px;
`;

export function Main(): JSX.Element {
    const expenses = useRecoilValue(expensesState);
    return (
        <>
            <Content>
                {expenses.map((item) => (
                    <ExpenseCard key={item.id} item={item} />
                ))}
                <ExpenseCreator expensesState={expensesState} />
            </Content>
        </>
    );
}

export const Card = styled.div`
    width: "300px";
    display: "flex";
    flex-direction: "column";
    padding: 12px;
    margin: 12px;
    background-color: #ccccff;
    border-radius: 8px;
`;

interface ExpenseCardProps {
    item: ExpenseEntry;
}

function ExpenseCard({ item }: ExpenseCardProps): JSX.Element {
    return (
        <Card>
            <p>{item.category}</p>
            <p>{item.comment}</p>
            <p>{item.amount}</p>
        </Card>
    );
}
