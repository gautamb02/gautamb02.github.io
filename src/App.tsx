import Layout from "./components/Layout";
import { profile } from "./data/profile";
import PageHeader from "./sections/PageHeader";
import Hero from "./sections/Hero";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import PublicationsSection from "./sections/PublicationsSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";

const App = () => {
  return (
    <Layout profile={profile}>
      <PageHeader profile={profile} />
      <Hero profile={profile} />
      <ExperienceSection profile={profile} />
      <ProjectsSection profile={profile} />
      <PublicationsSection profile={profile} />
      <SkillsSection profile={profile} />
      <EducationSection profile={profile} />
      <ContactSection profile={profile} />
    </Layout>
  );
};

export default App;
