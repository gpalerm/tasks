import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface doubleHalfProps {
    dhValue: number;
    setDhValue: (dhValue: number) => void;
}

function Doubler(prop: doubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                prop.setDhValue(2 * prop.dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver(prop: doubleHalfProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                prop.setDhValue(0.5 * prop.dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    const dhProp: doubleHalfProps = {
        dhValue: dhValue,
        setDhValue: setDhValue,
    };

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler {...dhProp}></Doubler>
            <Halver {...dhProp}></Halver>
        </div>
    );
}
