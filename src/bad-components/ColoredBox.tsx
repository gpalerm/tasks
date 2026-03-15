import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

//creating a prop to share the state between change color and color preview
interface colorsProp {
    colorIndex: number;
    setColorIndex: (index: number) => void;
}

function ChangeColor(prop: colorsProp): React.JSX.Element {
    //needs to take in the prop as a parameter
    return (
        <Button
            onClick={() => {
                //has to access the fields of the prop rather than directly using setColorIndex & colorIndex
                prop.setColorIndex((1 + prop.colorIndex) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview(prop: colorsProp): React.JSX.Element {
    //needs to take in the prop as a parameter
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                //needs to be prop.colorIndex not DEFAULT_COLOR_INDEX
                backgroundColor: COLORS[prop.colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    //state has to be initialized in the parent
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    //then making an instance of the prop to pass to the buttons
    const colorProp = { colorIndex: colorIndex, setColorIndex: setColorIndex };
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor {...colorProp}></ChangeColor>
                <ColorPreview {...colorProp}></ColorPreview>
            </div>
        </div>
    );
}
