import React from 'react';
import './App.css';
import { Container, AspectRatio, Image } from '@mantine/core';
import myPic from "./images/Jesse_Navarro.jpg";
// components
import Navbar from './components/Navbar';
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
        </Container>
    </> 
  );
}

export default App;
