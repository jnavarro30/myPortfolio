import { SimpleGrid } from "@mantine/core";
import KoD from "../../images/kingdom_of_dwarves.png";
// components
import ProjectCard from "./project-card";

function ProjectsPage() {
  const images = [KoD];
  return (
    <SimpleGrid
      className="border-2"
      spacing="lg"
      breakpoints={[
        { maxWidth: "md", cols: 2, spacing: "sm" },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
    >
      <ProjectCard projectImage={KoD} />
      <ProjectCard projectImage={KoD} />
      <ProjectCard projectImage={KoD} />
      <ProjectCard projectImage={KoD} />
    </SimpleGrid>
  );
}

export default ProjectsPage;
