import "./App.css";
import Characters from "./components/Characters";

import Hero from "./components/Hero";
import OverView from "./components/OverView";
import Puzzle from "./components/Puzzle";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Hero />
      <OverView />
      <Title title="MEET THE CHARACTERS" />
      <Characters />
      <Puzzle/>
    </>
  );
}

export default App;
