import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [givenAnswer, checkAnswer] = useState<string>("");

    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="textbox">
                <Form.Label>Enter Your Answer:</Form.Label>
                <Form.Control
                    value={givenAnswer}
                    onChange={
                        //anonymous function but giving it a parameter that can be passed to checkAnswer
                        (event: React.ChangeEvent<HTMLInputElement>) => {
                            checkAnswer(event.target.value);
                        }
                    }
                />
            </Form.Group>
            <div>
                {
                    //displays a check if the answer typed in the textbox matches the expectedAnswer parameter, X otherwise
                    expectedAnswer === givenAnswer ? "✔️" : "❌"
                }
            </div>
        </div>
    );
}
