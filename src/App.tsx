/* import ListItem from "./components/ListItem";
import Button from "./components/button"; */
import { useState } from "react";
import InputControlled from "./components/Input";
import InputForm from "./components/InputForm";

/* function ImportantList() {
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
} */
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
/* function App() { */
/*   const [animal, setAnimal] = useState({
    name: "Maunz",
    species: "cat",
    age: 2,
  });
 */
/*   const handleIncreaseAge = () => {
    //NEVER mutate a state like this!!! BAD practice
    animal.age = animal.age + 1; //BAD
    setAnimal(animal);
  }; */

/*   const handleIncreaseAge = () => {
    console.log("before setAnimal:", animal.age);
    setAnimal({ ...animal, age: animal.age + 1 });
    console.log("after setAnimal:", animal.age);
  }; */

/*   return (
    <>
      <h1>{animal.name}</h1>
      <h2>{animal.species}</h2>
      <h4>{animal.age}</h4>
      <button onClick={handleIncreaseAge}>Increase Age</button>
    </>
  );
}

/* function App() {
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
 */
function App() {
  return (
    <div>
      <InputForm />
    </div>
  );
}

export default App;
