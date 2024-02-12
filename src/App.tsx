<<<<<<< HEAD
/* import ListItem from "./components/ListItem";
import Button from "./components/button"; */
import { useState } from "react";
import InputControlled from "./components/Input";
import InputForm from "./components/InputForm";
=======
import ListItem from "./components/ListItem";
import Button from "./components/button";
import { useState, useEffect, useDebugValue, useId } from "react";
import SideEffects from "./components/SideEffects";
import Parent from "./components/SideEffects";
import CountOnInput from "./components/CountOnInput";
import Context from "./components/Context";
import ImportantList from "./components/ImportantList";
import MyList from "./components/MyList";
>>>>>>> ab4d0b29509b2104f9cb6dd6a878cfa145e11fb0

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
<<<<<<< HEAD
/* function App() { */
/*   const [animal, setAnimal] = useState({
    name: "Maunz",
    species: "cat",
    age: 2,
  });
 */
=======
/* function App() {
  const [animal, setAnimal] = useState({
    name: "Maunz",
    species: "cat",
    age: 2,
  }); */

>>>>>>> ab4d0b29509b2104f9cb6dd6a878cfa145e11fb0
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
} */

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
<<<<<<< HEAD
 */
function App() {
  return (
    <div>
      <InputForm />
    </div>
  );
}

=======
*/

/* function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
        />
        Darkmode
      </label>
      <div>
        <MyList
          todos={["hello", "world", "hi"]}
          theme={isDark ? "dark" : "light"}
        />
      </div>
    </>
  );
} */

/* function useTitle() {
  const [title, setTitle] = useState<string>("");
  useDebugValue(`title is ${title}`);
  useEffect(() => {
    setTimeout(() => {
      setTitle("testing useDebugvalue");
    }, 2000);
  }, [title]);
  return title;
}

function App() {
  const title = useTitle();
  return (
    <>
      <h1>{title}</h1>
    </>
  );
} */

function App() {
  const id = useId();
  return (
    <label htmlFor={id}>
      Name:
      <input id={id} type="text" />
    </label>
  );
}
>>>>>>> ab4d0b29509b2104f9cb6dd6a878cfa145e11fb0
export default App;
