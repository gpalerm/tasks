import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button
                //Had to add curly braces around setValue(1 + value);
                onClick={() => {
                    setValue(1 + value);
                }}
            >
                Add One
            </Button>
            to {value}.
        </span>
    );
}
