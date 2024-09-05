import "./App.css";
import Characters from "./components/Characters";

import Hero from "./components/Hero";
import OverView from "./components/OverView";
import Title from "./components/Title";

function App() {
  return (
    <>
      <Hero />
      <OverView />
      <Title title="MEET THE CHARACTERS" />
      <Characters />
    </>
  );
}

export default App;
