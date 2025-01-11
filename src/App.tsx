import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Header />
        </div>
        <About />
        <Experience />
        <Education />
        {/* <Certification /> */}
        <Project />
      </div>
    </BrowserRouter>
  );
}

export default App;
