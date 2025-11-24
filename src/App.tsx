import Layout from "./components/Layout";
import { profile } from "./data/profile";
import Hero from "./sections/Hero";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";

const App = () => {
  return (
    <Layout profile={profile}>
      <Hero profile={profile} />
      <ExperienceSection profile={profile} />
      <ProjectsSection profile={profile} />
      <SkillsSection profile={profile} />
      <ContactSection profile={profile} />
    </Layout>
  );
};

export default App;

