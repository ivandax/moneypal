import * as React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";

// State
import { userState } from "../State";

// Helpers
import { generateId } from "../services/helpers";

const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
`;

const Label = styled.label`
    padding: 8px;
`;

const Input = styled.input`
    padding: 8px;
    margin: 8px;
`;

const Button = styled.button`
    color: blue;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid lightblue;
    border-radius: 3px;
    width: 200px;
`;

export function Welcome(): JSX.Element {
    const [data, setData] = React.useState({ name: "", email: "" });
    const [message, setMessage] = React.useState("");
    const [userStateValue, setUserStateValue] = useRecoilState(userState);

    function handleSubmit(event: React.SyntheticEvent): void {
        setMessage("");
        event.preventDefault();
        if (data.name !== "" && data.email !== "") {
            setUserStateValue({ email: data.email, name: data.name, id: generateId() });
        } else {
            setMessage("Name and email must be filled out");
        }
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <Label>
                Email:
                <Input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(event): void => setData({ ...data, email: event.target.value })}
                />
            </Label>
            <Label>
                Name:
                <Input
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={(event): void => setData({ ...data, name: event.target.value })}
                />
            </Label>
            <Button type="submit">Login</Button>
            <p>
                {userStateValue === null
                    ? "No user is logged in"
                    : `Current user is ${userStateValue.name}`}
            </p>
            <p>{message}</p>
        </FormContainer>
    );
}
