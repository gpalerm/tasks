import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [visibility, setVisibility] = useState<boolean>(false);
    const answer: string = "42";

    function changeVisibility() {
        setVisibility(!visibility);
    }

    return (
        <div>
            <Button onClick={changeVisibility}>
                {visibility ? answer : "Reveal Answer"}
            </Button>
        </div>
    );
}
