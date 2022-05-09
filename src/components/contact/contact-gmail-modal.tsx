import { useState } from "react";
import { Modal, Group, useMantineTheme, ActionIcon } from "@mantine/core";
import { BrandGmail } from "tabler-icons-react";

function GmailModal() {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Introduce yourself!"
        overlayColor={
          theme.colorScheme === "dark"
            ? theme.colors.dark[9]
            : theme.colors.gray[2]
        }
        overlayOpacity={0.55}
        overlayBlur={3}
      >
        {/* Modal content */}
        Hola
      </Modal>

      <Group position="center">
        <ActionIcon size={40}>
          <BrandGmail onClick={() => setOpened(true)} size={40} />
        </ActionIcon>
      </Group>
    </>
  );
}

export default GmailModal;
