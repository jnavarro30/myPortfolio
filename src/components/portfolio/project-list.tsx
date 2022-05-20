import { useState } from "react";
import { List, Box } from "@mantine/core";

function ProjectList() {
  const [projectTitles, setProjectTitles] = useState([
    "Kingdom of Dwarves",
    "Pokemon Pokedex",
    "Coming Soon",
    "Coming Soon"
  ]);

  return (
    <List spacing="lg" size="lg">
      {projectTitles.map((title, index) => {
        return (
          <List.Item key={index}>
            <a href={`#${index}`}>
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
            </a>
          </List.Item>
        );
      })}
    </List>
  );
}

export default ProjectList;
