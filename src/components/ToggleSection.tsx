import { PropsWithChildren, useState } from "react";

type ToggleSectionProps = PropsWithChildren<{
  id?: string;
  icon?: string;
  title: string;
  description?: string;
  defaultOpen?: boolean;
}>;

const ToggleSection = ({
  id,
  icon,
  title,
  description,
  defaultOpen = true,
  children,
}: ToggleSectionProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section id={id} className="block-section">
      <button
        type="button"
        className="toggle-heading"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={`chevron ${open ? "chevron--open" : ""}`} aria-hidden="true">
          ▶
        </span>
        {icon && <span className="section__icon">{icon}</span>}
        <h2>{title}</h2>
      </button>
      {open && (
        <div className="section__content">
          {description && <p className="section__description">{description}</p>}
          {children}
        </div>
      )}
    </section>
  );
};

export default ToggleSection;
