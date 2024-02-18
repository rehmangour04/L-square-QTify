/** @format */
import { StyledEngineProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroPage from "./components/Hero/HeroPage.jsx";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <HeroPage/>
      </StyledEngineProvider>
    </>
  );
}

export default App;
