import { ActionIcon } from "@mantine/core";
import { Home } from "tabler-icons-react";
// components
import PortfolioDrawer from "./portfolio/portfolio-drawer";
import ContactDrawer from "./contact/contact-drawer";

function Navbar() {
  return (
    <div className="nav_bar border-2 flex justify-evenly py-4">
      <PortfolioDrawer />
      <ActionIcon size={40}>
        <Home size={40} />
      </ActionIcon>
      <ContactDrawer />
    </div>
  );
}

export default Navbar;
