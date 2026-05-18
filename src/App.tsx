import { ThemeProvider } from "./context/ThemeContext";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Stats from "./components/Stats";
//import BeforeAfter from "./components/BeforeAfter";
//import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Packages from "./components/Packages";
import CustomPackage from "./components/CustomPackage"; // ← добавить
import CTA from "./components/CTA";

function App() {
  return (
    <ThemeProvider>
      <Cursor />
      <Navbar />
      <Hero />
      <Ticker />
      <Stats />
      {/* <BeforeAfter /> */}
      {/* <Portfolio /> */}
      <Process />
      <Packages />
      <CustomPackage /> {/* ← добавить */}
      <CTA />
    </ThemeProvider>
  );
}

export default App;