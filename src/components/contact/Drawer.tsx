import { useState } from 'react';
import { Drawer,Group, ActionIcon } from '@mantine/core';
import { At } from 'tabler-icons-react';
// components 

function PortfolioModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Contact"
        padding="xl"
        size="xs"
        position="top"
      >
        {/* Drawer content */}

      </Drawer>

      <Group position="center">
        <ActionIcon size={40}>
            <At onClick={() => setOpened(true)} size={40}/>
        </ActionIcon>
      </Group>
    </>
  );
}

export default PortfolioModal;