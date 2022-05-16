import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';

interface ProjectProps {
    projectImage: string
}

function ProjectCard({ projectImage }: ProjectProps) {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];

  return (
    <div className="w-5/6 m-auto">
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image className ="mt-2" src={projectImage} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Kingdom of Dwarves</Text>
          <Badge color="pink" variant="light">
            Typescript
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Demo
        </Button>
      </Card>
    </div>
  );
}

export default ProjectCard;