import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

interface ProjectProps {
  projectTitle: string;
  projectDescription: string;
  projectTechnologies: string[];
  projectImage: string;
}

function ProjectCard({
  projectTitle,
  projectDescription,
  projectTechnologies,
  projectImage,
}: ProjectProps) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const colors = ["violet", "indigo", "", "cyan"];

  return (
    <div className="w-5/6 m-auto">
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image
            className="mt-2"
            src={projectImage}
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>{projectTitle}</Text>
          {projectTechnologies.map((tech, index) => (
            <Badge color={colors[index]} variant="light" key={index}>
              {tech}
            </Badge>
          ))}
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {projectDescription}
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Demo
        </Button>
      </Card>
    </div>
  );
}

export default ProjectCard;
