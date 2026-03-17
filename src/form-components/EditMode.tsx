import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [defaultName, updateName] = useState<string>("Your Name");
    const [isStudent, updateStudent] = useState<boolean>(true);
    const [canEdit, changeMode] = useState<boolean>(false);

    return (
        //creating a switch to toggle edit mode
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="Edit Mode?"
                checked={canEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    changeMode(event.target.checked);
                }}
            ></Form.Check>

            {
                //checking if edit mode is toggled on using the ternary operator
                //if so it returns an input textbox for the user to input a name
                //as well as enables them to toggle whether they are a student or not
                canEdit ?
                    <div>
                        <Form.Group controlId="nameInput">
                            <Form.Label>Input Your Name:</Form.Label>
                            <Form.Control
                                value={defaultName}
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => {
                                    updateName(event.target.value);
                                }}
                            ></Form.Control>
                        </Form.Group>

                        <Form.Check
                            type="checkbox"
                            id="is-student"
                            label="Are You A Student?"
                            checked={isStudent}
                            onChange={(
                                event: React.ChangeEvent<HTMLInputElement>,
                            ) => {
                                //has to be event.target.checked instead of .value
                                updateStudent(event.target.checked);
                            }}
                        ></Form.Check>
                    </div>
                    //otherwise it returns text that displays the user's name and states if they are or aren't a student
                    //and the textbox & student checkbox are not displayed
                :   <div>
                        {defaultName} is{" "}
                        {isStudent ? " a student" : " not a student"}
                    </div>

            }
        </div>
    );
}
