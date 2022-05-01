import React from 'react';
import './App.css';
import { Container } from '@mantine/core';
// components
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-3xl font-bold underline">
          Hello world! 
        </h1>
  
      </Container>
    </> 
  );
}

export default App;
