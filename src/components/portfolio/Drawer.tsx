import { useState } from "react";
import { Drawer, Group, ActionIcon } from "@mantine/core";
import { Briefcase } from "tabler-icons-react";
// components
import ProjectList from "./ProjectList";

function PortfolioDrawer() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="PROJECTS"
        padding="xl"
        size="xl"
      >
        {/* Drawer content */}
        <ProjectList />
      </Drawer>

      <Group position="center">
        <ActionIcon size={40}>
          <Briefcase onClick={() => setOpened(true)} size={40} />
        </ActionIcon>
      </Group>
    </>
  );
}

export default PortfolioDrawer;
