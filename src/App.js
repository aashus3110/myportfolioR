import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skill/Skills";
import Project from "./components/Project/Project";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
