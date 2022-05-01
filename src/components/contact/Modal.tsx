import { useState } from 'react';
import { Modal,Group, ActionIcon } from '@mantine/core';
import { At } from 'tabler-icons-react';
// components 

function PortfolioModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
      >
        {/* Modal content */}
      
      </Modal>
      
      <Group position="center">
        <ActionIcon>
            <At onClick={() => setOpened(true)} />
        </ActionIcon>
      </Group>
    </>
  );
}

export default PortfolioModal;