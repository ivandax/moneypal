import * as React from "react";
import { useRecoilValue } from "recoil";

// State
import { userState } from "../State";

export function Main(): JSX.Element {
    const user = useRecoilValue(userState);
    return (
        <div>
            <p>{user === null ? "No user logged in" : `Welcome, ${user.name}`}</p>
        </div>
    );
}
