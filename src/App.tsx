import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <div>
                <Container>
                    <Row>
                        <Col>
                            <header
                                className="App-header"
                                style={{ backgroundColor: "green" }}
                            >
                                <h1>Giovanni Palermo</h1>
                                <br />
                                UD CISC275 with React Hooks and TypeScript
                            </header>
                            <div
                                style={{
                                    marginLeft: "240px",
                                    width: "50px",
                                    height: "20px",
                                    backgroundColor: "red",
                                }}
                            />
                            <img
                                src="C:\Users\Giost\Downloads\smileyface.jpg"
                                alt="Smiley Face"
                            />
                        </Col>
                        <Col>
                            <ol>
                                <li>Pineapple</li>
                                <li>Apple</li>
                                <li>Banana</li>
                            </ol>
                            <Button
                                onClick={() => {
                                    console.log("Hello World!");
                                }}
                            >
                                Log Hello World
                            </Button>
                            <div
                                style={{
                                    marginLeft: "270px",
                                    width: " 20px",
                                    height: "50px",
                                    backgroundColor: "red",
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default App;
