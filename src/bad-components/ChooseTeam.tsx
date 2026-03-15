import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton",
];

export function ChooseTeam(): React.JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string) {
        //now the function takes in the newMember parameter so that it can actually access it
        if (!team.includes(newMember)) {
            team.push(newMember);
        }
        //have to use setTeam to the new updated team to update the state
        //and have to create a new array and unpack the team array with [...team]
        //instead of just using setTeam(team)
        //because of how react works, it only re-renders when the reference to the state object changes, not when the contents change
        //and just passing in team causes it to compare team to itself without realizing the contents of team changed
        setTeam([...team]);
        setAllOptions(allOptions);
    }

    function clearTeam() {
        // cant just set team = [] because that wont actually update the state
        setTeam([]);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={
                                    //onClick={chooseMember}
                                    // needed the () => {} temp function definition, and to pass the option into chooseMember
                                    // so that chooseMember can access that parameter to update the team
                                    () => {
                                        chooseMember(option);
                                    }
                                }
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}

                    <Button
                        onClick={
                            // () => isnt necessary since no parameter is getting passes to clearTeam
                            clearTeam
                        }
                    >
                        Clear Team
                    </Button>
                </Col>
            </Row>
        </div>
    );
}
