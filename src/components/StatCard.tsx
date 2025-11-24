import { Stat } from "../types";

type StatCardProps = {
  stat: Stat;
};

const StatCard = ({ stat }: StatCardProps) => {
  return (
    <div className="stat-card">
      <p className="stat-card__value">{stat.value}</p>
      <p className="stat-card__label">{stat.label}</p>
      {stat.helper && <p className="stat-card__helper">{stat.helper}</p>}
    </div>
  );
};

export default StatCard;

