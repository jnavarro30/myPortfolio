import { SimpleGrid } from "@mantine/core";
import KoD from "../../images/kingdom_of_dwarves.png";
import comingSoon from "../../images/coming_soon.jpg";
// components
import ProjectCard from "./project-card";

function ProjectsPage() {
  const projects = [
    {
      title: "Kingdom of Dwarves",
      description:
        "Kingdom of Dwarves is a cinematic-quality collection of 4,000 NFTs. Every dwarf is a unique, one-of-a-kind warrior created by Emmy and Academy Award-Winning artists with a portfolio of work including Game of Thrones, Westworld, and Gears of War.",
      technologies: ["Typescript", "React", "Tailwind", "Next"],
      image: KoD,
    },
    {
      title: "Coming Soon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis nisi eum, facilis possimus adipisci, odit sint corporis quis eaque officia perspiciatis? Amet tenetur nemo quae repudiandae similique dicta dolor animi odit reiciendis culpa?",
      technologies: ["Unkown", "Unkown", "Unkown", "Unkown"],
      image: comingSoon,
    },
    {
      title: "Coming Soon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis nisi eum, facilis possimus adipisci, odit sint corporis quis eaque officia perspiciatis? Amet tenetur nemo quae repudiandae similique dicta dolor animi odit reiciendis culpa?",
      technologies: ["Unkown", "Unkown", "Unkown", "Unkown"],
      image: comingSoon,
    },
    {
      title: "Coming Soon",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis perferendis nisi eum, facilis possimus adipisci, odit sint corporis quis eaque officia perspiciatis? Amet tenetur nemo quae repudiandae similique dicta dolor animi odit reiciendis culpa?",
      technologies: ["Unkown", "Unkown", "Unkown", "Unkown"],
      image: comingSoon,
    },
  ];

  return (
    <SimpleGrid
      className=""
      spacing="lg"
      breakpoints={[
        { minWidth: "xs", cols: 2, spacing: "sm" },
        { maxWidth: "xs", cols: 1, spacing: "sm" },
      ]}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          projectTitle={project.title}
          projectDescription={project.description}
          projectTechnologies={project.technologies}
          projectImage={project.image}
        />
      ))}
    </SimpleGrid>
  );
}

export default ProjectsPage;
