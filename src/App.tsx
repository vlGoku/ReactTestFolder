import ListItem from "./components/ListItem";
import Button from "./components/button";
import { useState } from "react";

function ImportantList() {
  let animals: string[] = ["Lion", "Puma", "Horse", "Snake", "Elephant"];
  const logAnimalName = (name: string) => {
    console.log(name);
  };
  return (
    <>
      {animals.length === 0 ? (
        <div>No Animals to show</div>
      ) : (
        <ul>
          {animals.map((animal) => {
            return (
              <ListItem
                key={animal}
                animalName={animal}
                handleClick={logAnimalName}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}
/*
function App() {
  let text = "click me";
  const onClick = (message: string) => {
    alert(message);
  };
  return (
    <>
      <h1>Hello React</h1>
      <Button onClick={onClick} btnText={text} />
    </>
  );
} */
function App() {
  const colors = ["red", "green", "yellow"];
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);

  return (
    <div style={{ backgroundColor, padding: "100px" }}>
      {colors.map((color): JSX.Element => {
        return (
          <button key={color} onClick={() => setBackgroundColor(color)}>
            {color}
          </button>
        );
      })}
    </div>
  );
}

export default App;
