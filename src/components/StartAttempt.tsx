import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                disabled={
                    //setting the disabled property works exactly like setting the onClick property
                    inProgress || attempts === 0
                }
                onClick={() => {
                    setAttempts(attempts - 1);
                    setProgress(true);
                }}
            >
                Start Quiz
            </Button>
            <Button
                disabled={!inProgress}
                onClick={() => {
                    setProgress(false);
                }}
            >
                Stop Quiz
            </Button>
            <Button
                disabled={inProgress}
                onClick={() => {
                    setAttempts(attempts + 1);
                }}
            >
                Mulligan
            </Button>
            <div>Number of attempts: {attempts}</div>
        </div>
    );
}
