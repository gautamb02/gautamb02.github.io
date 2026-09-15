import { Stat } from "../types";

type StatCardProps = {
  stat: Stat;
};

const StatCard = ({ stat }: StatCardProps) => {
  return (
    <div className="stat-item">
      <p className="stat-item__value">{stat.value}</p>
      <p className="stat-item__label">
        {stat.label}
        {stat.helper && <span className="stat-item__helper"> · {stat.helper}</span>}
      </p>
    </div>
  );
};

export default StatCard;
