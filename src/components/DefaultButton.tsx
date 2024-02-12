interface IPops {
  title: string;
  className: string;
}

export default function DefaultButton({ title, className }: IPops) {
  return <button className={className}>{title}</button>;
}
