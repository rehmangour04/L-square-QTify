/** @format */
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
      </StyledEngineProvider>
    </>
  );
}

export default App;
