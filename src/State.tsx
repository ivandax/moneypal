import { atom, useRecoilSnapshot, useRecoilValue, RecoilState } from "recoil";
import { useEffect } from "react";

// Types
import { User } from "./services/types";

const userState = atom<User | null>({ key: "user", default: null });

export type StateValue = User | null;

function DebugObserver(): null {
    console.log("debugger is instantiated");
    const snapshot = useRecoilSnapshot();
    useEffect(() => {
        console.log("debugger is working!");
        const nodes = snapshot.getNodes_UNSTABLE({ isModified: true });
        // const intoArray = Array.from(nodes);
        for (const node of nodes) {
            console.log("we get here!");
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            console.debug(node.key, snapshot.getLoadable(node));
        }
    }, [snapshot]);

    return null;
}

interface RecoilObserverProps {
    node: RecoilState<StateValue>;
    onChange: (state: StateValue) => void;
}

const RecoilObserver = ({ node, onChange }: RecoilObserverProps): null => {
    const value = useRecoilValue(node);
    useEffect(() => onChange(value), [onChange, value]);
    return null;
};

export { userState, DebugObserver, RecoilObserver };
