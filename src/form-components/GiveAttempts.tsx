import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [currentAttempts, updateAttempts] = useState<number>(3);
    const [requestedString, requestAttempts] = useState<string>("");
    //if no number is typed into the input box, then the empty string is received as the input
    //the empty string can't be parsed to an integer, so the || 0 is included so that the empty string will default to a zero
    //and so zero attempts would be added if the empty string was received as the input
    const requestedAttempts = parseInt(requestedString) || 0;

    return (
        <div>
            <h3>Give Attempts</h3>
            {/*
            specifying "number" as the type for the input box ensures only numbers can be typed into the box, 
            but the input is still a string
            */}
            <Form.Group controlId="inputbox">
                <Form.Label>Requested Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedString}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        requestAttempts(event.target.value);
                    }}
                ></Form.Control>
            </Form.Group>
            <Button
                disabled={currentAttempts === 0}
                onClick={() => {
                    //the use button: reduces attempts by 1, becomes disabled if attempts reach 0
                    updateAttempts(currentAttempts - 1);
                }}
            >
                use
            </Button>
            <Button
                onClick={() => {
                    //the requested attempts only get added to the total when the gain button is pressed
                    updateAttempts(currentAttempts + requestedAttempts);
                }}
            >
                gain
            </Button>

            <div>Number of Attempts Remaining: {currentAttempts}</div>
        </div>
    );
}
