import { ActionIcon } from "@mantine/core";
import { Home } from "tabler-icons-react";
// components
import PortfolioDrawer from "./portfolio/portfolio-drawer";
import ContactDrawer from "./contact/contact-drawer";

interface AppProps {
  setBounce: (a: boolean) => void;
  darkTheme: boolean;
}

function Navbar( { setBounce, darkTheme }: AppProps) {
  const homeOnClick = () => {
    window.scrollTo(0, 0);
    setBounce(true);
    setTimeout(() => {
      setBounce(false);
    }, 1000);
  }
  return (
    <div className="nav_bar border-2 flex justify-evenly py-4 sticky top-0 z-10 bg-white"
    style={{ background: darkTheme ? '#1A1B1E' : 'white' }}>
      <PortfolioDrawer />
      <ActionIcon size={40} onClick={homeOnClick}>
        <Home style={{color: "#228b22"}} size={40} />
      </ActionIcon>
      <ContactDrawer />
    </div>
  );
}

export default Navbar;
