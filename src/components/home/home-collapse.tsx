import { useState } from "react";
import { Collapse, ActionIcon, Title } from "@mantine/core";
import { ChevronDown, ChevronUp } from "tabler-icons-react";

function HomeCollapse() {
  const [opened, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <Title order={1}>About Me</Title>
      <ActionIcon onClick={() => setOpen((o) => !o)} size={40}>
        {opened ? <ChevronUp size={40} /> : <ChevronDown size={40} />}
      </ActionIcon>

      <Collapse className="mb-2" in={opened}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa commodi,
        sequi id tenetur debitis ab perferendis laudantium repellendus non
        quisquam accusamus impedit tempore necessitatibus quos doloremque atque?
        Dolorum commodi dolore quia amet, ipsum vero nulla qui, nobis placeat
        nam quos reprehenderit esse? Sunt aliquam optio, enim minima ad rerum
        veniam?
      </Collapse>
    </div>
  );
}

export default HomeCollapse;
