import ListItem from "./components/ListItem";
import { useState, useEffect, useDebugValue, useId } from "react";
import SideEffects from "./components/SideEffects";
import Parent from "./components/SideEffects";
import CountOnInput from "./components/CountOnInput";
import Context from "./components/Context";
import ImportantList from "./components/ImportantList";
import MyList from "./components/MyList";
import useScrolling from "./components/UseScrolling";
import styled from "@emotion/styled";
import DefaultButton from "./components/DefaultButton";

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
/* function App() {
  const [animal, setAnimal] = useState({
    name: "Maunz",
    species: "cat",
    age: 2,
  }); */

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

/* function App() {
  const id = useId();
  return (
    <label htmlFor={id}>
      Name:
      <input id={id} type="text" />
    </label>
  );
}*/

/* function App() {
  const isScrolling = useScrolling();
  return (
    <div style={{ height: "1000px" }}>
      <h1 style={{ position: "fixed" }}>{isScrolling.toString()}</h1>
      {isScrolling && (
        <p style={{ position: "fixed", top: "100px" }}>
          hey i am scrolling down
        </p>
      )}
    </div>
  );
} */

/* const StyledDiv = styled("div")`
  padding: 2rem;
  background-color: ${(props) => props.color || "#62ED26"};
`;

const Button = styled("button")`
  color: #000;
  padding: 10px;
  background-color: #f0e259;
  border: 1px solid black;
  border-radius: 5px;
  &:hover {
    color: #fff;
    background-color: #f08e59;
  }
`;

function App() {
  return (
    <StyledDiv>
      <Button>Click me</Button>
    </StyledDiv>
  );
} */

interface IPops {
  title?: string;
  className: string;
}

const MyButton = ({ className }: IPops) => (
  <DefaultButton className={className} title="My Button" />
);

const StyledButton = styled(MyButton)<IPops>`
  color: red;
  padding: 10px;
`;

const Section = styled.section`
  padding: 2rem;
  background-color: #62ed26;
`;

const Aside = Section.withComponent("aside");

function App() {
  return (
    <main>
      <Section>This is a styled Section</Section>
      <Aside>This has the same style as Section</Aside>
    </main>
  );
}

export default App;
