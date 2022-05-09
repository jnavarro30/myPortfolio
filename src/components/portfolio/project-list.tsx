import { useState } from "react";
import { List, Anchor, Box } from "@mantine/core";

function ProjectList() {
  const [projectTitles, setProjectTitles] = useState([
    "Kingdom of Dwarves",
    "Pokemon Pokedex",
    "Project 3",
    "Project 4",
    "Project 5",
    "Project 6",
  ]);

  return (
    <List spacing="lg" size="lg">
      {projectTitles.map((title, index) => {
        return (
          <List.Item key={index}>
            <Box
              sx={(theme) => ({
                backgroundColor:
                  theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
                textAlign: "center",
                padding: theme.spacing.xl,
                borderRadius: theme.radius.md,
                cursor: "pointer",

                "&:hover": {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[5]
                      : theme.colors.gray[1],
                },
              })}
            >
              {title}
            </Box>
          </List.Item>
        );
      })}
    </List>
  );
}

export default ProjectList;
