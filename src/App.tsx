import { useState } from 'react';
import "./App.css";
import "animate.css";
import { Container, AspectRatio, Image } from "@mantine/core";
import myPic from "./images/profile-pic.png";
// components
import Navbar from "./components/nav-bar";
import AboutSummary from "./components/home/about-summary";
import ProjectsPage from "./components/portfolio/projects-page";

function App() {
  const [flash, setFlash] = useState<boolean>(false);
  return (
    <>
      <Navbar setFlash={setFlash} />
      <Container>
        <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 300 }} mx="auto">
          <Image
            className={ flash ? "animate__animated animate__bounce" : "" }
            src={myPic}
            alt="picture of myself"
            radius="md"
            width={250}
            height={250}
          />
        </AspectRatio>
        <AboutSummary />
        <ProjectsPage />
      </Container>
    </>
  );
}

export default App;
