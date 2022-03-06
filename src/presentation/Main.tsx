import * as React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { generateId } from "../services/helpers";

// Types
import { ExpenseEntry } from "../services/types";

// State
import { expensesState } from "../State";

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
                <ExpenseCreator />
            </Content>
        </>
    );
}

const Card = styled.div`
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

function ExpenseCreator(): JSX.Element {
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
