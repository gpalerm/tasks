import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const mcq: QuestionType = "multiple_choice_question";
    const saq: QuestionType = "short_answer_question";
    const [value, setValue] = useState<QuestionType>(saq);

    //make sure to have curly braces around the set value when declaring function in there like that
    //made a seperate display for mc/short answer so that the button can be labeled change type
    //while not displaying Multiple ChoiceChange Type on the button itself
    return (
        <div>
            <Button
                onClick={() => {
                    setValue(value === mcq ? saq : mcq);
                }}
            >
                Change Type
            </Button>

            <div> {value === mcq ? "Multiple Choice" : "Short Answer"} </div>
        </div>
    );
}
