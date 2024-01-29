interface IProps {
  btnText: string;
  onClick: (message: string) => void;
}

export default function Button({ btnText, onClick }: IProps) {
  return (
    <>
      <button onClick={() => onClick("Hello from Button")}>{btnText}</button>
    </>
  );
}
