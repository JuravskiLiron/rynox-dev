import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Packages from "./components/Packages";
import WhyMe from "./components/WhyMe";
import Cursor from "./components/Cursor";
import CustomPackage from "./components/CustomPackage";
import BeforeAfter from "./components/BeforeAfter";

function App() {
  return (
    <div className="bg-black font-sans text-white relative overflow-x-hidden">
      <Navbar />
      <Cursor />
      <Hero />
      <BeforeAfter/>
      <Portfolio />
      <Packages />
      <CustomPackage /> 
      <WhyMe />
    </div>
  );
}

export default App;