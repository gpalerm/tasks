import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const myColors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "black",
    ];
    const [chosenColor, updateColor] = useState<string>(myColors[0]);

    return (
        <div>
            <h3>Change Color</h3>

            {
                //creates a radio button for each of the colors I put in the myColors array
                //used inline to make them inline and used style to make the background color of the button its corresponding color
                myColors.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => {
                            updateColor(event.target.value);
                        }}
                        id={"color-updater-" + color}
                        label={color}
                        value={color}
                        checked={color === chosenColor}
                        style={{ backgroundColor: color }}
                    ></Form.Check>
                ))
            }

            <div>
                <span>You have chosen </span>
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: chosenColor }}
                >
                    {chosenColor}
                </span>
                .
            </div>
        </div>
    );
}
