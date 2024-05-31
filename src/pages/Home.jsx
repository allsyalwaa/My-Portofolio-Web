import SecAbout from "../components/section/SecAbout";
import SecContact from "../components/section/SecContact";
import SecHero from "../components/section/SecHero";
import SecProjects from "../components/section/SecProjects";
import SecSkills from "../components/section/SecSkills";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <SecHero />
      <SecAbout />
      <SecSkills />
      <SecProjects />
      <SecContact />
    </MainLayout>
  );
}
