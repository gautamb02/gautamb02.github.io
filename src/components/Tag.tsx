export type TagColor =
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";

type TagProps = {
  label: string;
  color?: TagColor;
};

const Tag = ({ label, color = "gray" }: TagProps) => {
  return <span className={`tag tag--${color}`}>{label}</span>;
};

export default Tag;
