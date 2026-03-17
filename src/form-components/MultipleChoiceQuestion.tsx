import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, makeChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="dropdown">
                <Form.Label>Choose An Answer</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                        makeChoice(event.target.value);
                    }}
                >
                    {options.map((op: string) => (
                        <option key={op} value={op}>
                            {op}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{expectedAnswer === choice ? "✔️" : "❌"}</div>
        </div>
    );
}
