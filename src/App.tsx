import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Page/HomePage";
import Header from "./Components/Header/Header";
import { MainContainer } from "./App.style";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </MainContainer>
    </>
    // If in the future we need to add navigation to another page, the infrastructure is ready
  );
}

export default App;
