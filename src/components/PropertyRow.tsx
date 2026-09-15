type PropertyRowProps = {
  icon: string;
  label: string;
  value: string;
  href?: string;
};

const PropertyRow = ({ icon, label, value, href }: PropertyRowProps) => {
  return (
    <div className="property-row">
      <span className="property-row__label">
        {icon} {label}
      </span>
      {href ? (
        <a className="property-row__value property-row__value--link" href={href}>
          {value}
        </a>
      ) : (
        <span className="property-row__value">{value}</span>
      )}
    </div>
  );
};

export default PropertyRow;
