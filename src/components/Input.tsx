import { useState } from "react";

export default function InputControlled() {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>{value}</p>
    </>
  );
}
