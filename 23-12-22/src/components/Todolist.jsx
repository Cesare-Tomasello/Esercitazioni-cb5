import { Fragment } from "react";
import { Button } from "../atoms/button/Button";
import { useState } from "react";

const Listcard = (text) => {
  const [isDone, setIsDone] = useState(true);
  const doneFunction = () => {
    setIsDone(!isDone);
  };
  return (
    <Fragment>
      <h1>{text}</h1>
      <Button className="btn" onClick={doneFunction}>
        Done!
      </Button>
      <p style={{ display: isDone ? "none" : "block" }}>fatto!</p>
    </Fragment>
  );
};

export function Todolist() {
  const items = [
    { label: "Fare la spesa", id: 1 },
    { label: "Passeggiata col cane", id: 2 },
    { label: "Fare la To Do List", id: 3 },
    { label: "Fare il css", id: 4 },
  ];

  return items.map((item) => Listcard(item.label));
}
