/** @format */

import { StyledEngineProvider } from "@mui/material/styles";
import React from "react";
import Home from "./components/Home";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Home />
    </StyledEngineProvider>
  );
}

export default App;
