import { ActionIcon } from "@mantine/core";
import { Home } from "tabler-icons-react";
// components
import PortfolioDrawer from "./portfolio/portfolio-drawer";
import ContactDrawer from "./contact/contact-drawer";

interface AppProps {
  setFlash: (a: boolean) => void;
}

function Navbar( { setFlash }: AppProps) {
  const homeOnClick = () => {
    window.scrollTo(0, 0);
    setFlash(true);
    setTimeout(() => {
      setFlash(false);
    }, 1000);
  }
  return (
    <div className="nav_bar border-2 flex justify-evenly py-4 sticky top-0 z-10 bg-white">
      <PortfolioDrawer />
      <ActionIcon size={40} onClick={homeOnClick}>
        <Home style={{color: "#228b22"}} size={40} />
      </ActionIcon>
      <ContactDrawer />
    </div>
  );
}

export default Navbar;
