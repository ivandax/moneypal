export type { User, ExpenseEntry };

type User = {
    id: string;
    email: string;
    name: string;
};

type ExpenseEntry = {
    id: string;
    category: string;
    comment: string;
    amount: number;
};
