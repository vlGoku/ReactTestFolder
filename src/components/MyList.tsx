import { useMemo } from "react";
import "./style.css";

function expensiveFn(todos: string[]): string[] {
  const start = performance.now();
  while (performance.now() - start < 1000) {
    //This will take a while!!!
  }
  console.log("This took a while");
  return todos;
}

interface Props {
  todos: string[];
  theme: string;
}

export default function MyList({ todos, theme }: Props) {
  const filteredList = useMemo(
    () => expensiveFn(todos),
    [JSON.stringify(todos)]
  );
  return (
    <ul className={theme}>
      {filteredList.map((listItem: string): JSX.Element => {
        return <li key={listItem}>{listItem}</li>;
      })}
    </ul>
  );
}
