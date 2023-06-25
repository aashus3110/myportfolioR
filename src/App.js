import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import H from "./components/H/H";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skill/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <H />
    </div>
  );
}

export default App;
