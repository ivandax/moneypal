import * as React from "react";
import { useSetRecoilState, RecoilState } from "recoil";
import styled from "styled-components";
import { generateId } from "../../services/helpers";
// Types
import { ExpenseEntry } from "../../services/types";

import { Card } from "../Main";

const Creator = styled(Card)`
    background-color: #ccff66;
    flex-direction: "row";
`;

const CreatorInput = styled.input`
    margin: 8px;
    padding: 4px;
`;

const AddButton = styled.button`
    margin: 8px;
    padding: 4px;
`;

interface ExpenseCreatorProps {
    expensesState: RecoilState<ExpenseEntry[]>;
}

export function ExpenseCreator({ expensesState }: ExpenseCreatorProps): JSX.Element {
    const initialData = { category: "", comment: "", amount: 0 };
    const [data, setData] = React.useState(initialData);
    const { category, comment, amount } = data;
    const addExpense = useSetRecoilState(expensesState);
    function handleAddExpense(): void {
        if (category !== "" && comment !== "" && amount > 0) {
            setData(initialData);
            addExpense((previous): ExpenseEntry[] => [
                ...previous,
                { category, comment, amount, id: generateId("expense") },
            ]);
        }
    }
    return (
        <Creator>
            <CreatorInput
                placeholder="Category"
                value={category}
                onChange={(event): void => setData({ ...data, category: event.target.value })}
            />
            <CreatorInput
                placeholder="Comment"
                value={comment}
                onChange={(event): void => setData({ ...data, comment: event.target.value })}
            />
            <CreatorInput
                placeholder="Amount"
                type={"number"}
                value={amount}
                onChange={(event): void => {
                    const maybeNumber = parseFloat(event.target.value);
                    if (isNaN(maybeNumber) === false) {
                        setData({ ...data, amount: maybeNumber });
                    }
                }}
            />
            <AddButton onClick={handleAddExpense}>Add</AddButton>
        </Creator>
    );
}
