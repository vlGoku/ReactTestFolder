import { useContext } from "react";
import Context from "./Context";

export default function ImportantList({ visible }: { visible: () => void }) {
  const isVisible = useContext(Context);
  return (
    <>
      {isVisible && (
        <>
          <h1>I am visible</h1>
          <p>This is a important List</p>
        </>
      )}
      <button onClick={visible}>{isVisible ? "hide" : "show"}</button>
    </>
  );
}
