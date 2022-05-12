import React from "react";
import "./App.css";
import { Container, AspectRatio, Image } from "@mantine/core";
import myPic from "./images/profile-pic.png";
// components
import Navbar from "./components/navbar";
import HomeCollapse from "./components/home/home-collapse";

function App() {
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
      </Container>
    </>
  );
}

export default App;
