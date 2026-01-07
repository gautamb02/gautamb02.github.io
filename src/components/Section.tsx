import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}>;

const Section = ({ id, title, description, children }: SectionProps) => {
  return (
    <section id={id} className="section">
      <div className="section__header">
        <h2>{title}</h2>
        {description && <p className="section__description">{description}</p>}
      </div>
      <div className="section__body">{children}</div>
    </section>
  );
};

export default Section;

