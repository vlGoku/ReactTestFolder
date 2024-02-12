import { FormEvent, useRef } from "react";

export default function InputForm() {
  const fullNameInput = useRef<HTMLInputElement | null>(null);
  const emailInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);
  const confirmPasswordInput = useRef<HTMLInputElement | null>(null);
  //Style Objects***************+
  const blockStyle = {
    display: "block",
  };
  const paddingStyle = {
    padding: "10px",
  };
  const btnStyle = {
    padding: "10px",
    backgroundColor: "#ADD8E6",
    border: "none",
    borderRadius: "3px",
  };
  //Style Objects***********

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      fullname: fullNameInput.current?.value,
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
      confirmPassword: confirmPasswordInput.current?.value,
    };
    console.log(data);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div style={paddingStyle}>
        <label style={blockStyle}>Fullname</label>
        <input type="text" ref={fullNameInput}></input>
      </div>
      <div style={paddingStyle}>
        <label style={blockStyle}>E-Mail</label>
        <input type="email" ref={emailInput}></input>
      </div>
      <div style={paddingStyle}>
        <label style={blockStyle}>Password</label>
        <input type="password" ref={passwordInput}></input>
      </div>
      <div style={paddingStyle}>
        <label style={blockStyle}>Confirm Password</label>
        <input type="password" ref={confirmPasswordInput}></input>
      </div>
      <div style={paddingStyle}>
        <button type="submit" style={btnStyle}>
          Submit{" "}
        </button>
      </div>
    </form>
  );
}
