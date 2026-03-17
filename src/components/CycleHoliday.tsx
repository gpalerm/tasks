import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    //union type, so the holiday can only be one of those 5 strings
    //birthday, christmas, halloween, st pattys, thanksgiving
    type Holiday = "🎂" | "🎅" | "🎃" | "🍀" | "🦃";
    const [holiday, setHoliday] = useState<Holiday>("🎂");

    //using records since it would be simpler than functions with a bunch of conditionals
    //maps the old holiday to the next holiday in order
    //the cycles are variables of type Record<Holiday, Holiday>
    const alphabetCycle: Record<Holiday, Holiday> = {
        "🎂": "🎅",
        "🎅": "🎃",
        "🎃": "🍀",
        "🍀": "🦃",
        "🦃": "🎂",
    };

    const dateCycle: Record<Holiday, Holiday> = {
        "🎂": "🍀",
        "🍀": "🎃",
        "🎃": "🦃",
        "🦃": "🎅",
        "🎅": "🎂",
    };

    return (
        <div>
            <Button
                onClick={() => {
                    //passing in the current holiday so alphabetCycle can map to the next holiday
                    //and then setHoliday updates holiday to the new one
                    setHoliday(alphabetCycle[holiday]);
                }}
            >
                Cycle Alphabetically
            </Button>
            <Button
                onClick={() => {
                    setHoliday(dateCycle[holiday]);
                }}
            >
                Advance by Year{" "}
            </Button>

            <div>Current Holiday: {holiday} </div>
        </div>
    );
}
