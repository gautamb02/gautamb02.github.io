type PillProps = {
  label: string;
};

const Pill = ({ label }: PillProps) => {
  return <span className="pill">{label}</span>;
};

export default Pill;

