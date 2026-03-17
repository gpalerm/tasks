import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [left_die, roll_left] = useState<number>(1);
    const [right_die, roll_right] = useState<number>(2);

    return (
        <div>
            <Button
                onClick={() => {
                    //uses the d6 helper to generate a number between 1 and 6
                    //then passes it to roll_left to update the dice number
                    roll_left(d6());
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    roll_right(d6());
                }}
            >
                Roll Right
            </Button>
            <div>
                {/*
                have to specify the data-testid inside the angle brackets of the span
                */}
                <span data-testid="left-die">left-die: {left_die}</span>
                <span data-testid="right-die"> right-die: {right_die}</span>
            </div>
            <div>
                {
                    //if the left die and right die are equal, it then checks if the left is a one and
                    //if so then it displays You Lose, or You Win if its not a one.
                    //otherwise if the left die and right die are not equal, then it displays Keep Rolling
                    left_die === right_die ?
                        left_die === 1 ?
                            "You Lose"
                        :   "You Win"
                    :   "Keep Rolling"
                }
            </div>
        </div>
    );
}
