import { useEffect, useState, useDebugValue } from "react";

function useTitle() {
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
}

export default App;
