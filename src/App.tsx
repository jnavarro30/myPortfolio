import "./App.css";
import { Container, AspectRatio, Image } from "@mantine/core";
import myPic from "./images/profile-pic.png";
// components
import Navbar from "./components/nav-bar";
import HomeCollapse from "./components/home/home-collapse";
import ProjectsPage from "./components/portfolio/projects-page";
import useScrollPosition from "./utils/custom-hooks";

function App() {
  const scrollPosition = useScrollPosition();
  console.log(scrollPosition);
  return (
    <>
      <Navbar />
      <Container>
        <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 300 }} mx="auto">
          <Image
            src={myPic}
            alt="picture of myself"
            radius="md"
            width={250}
            height={250}
          />
        </AspectRatio>
        <HomeCollapse />
        <ProjectsPage />
      </Container>
    </>
  );
}

export default App;
