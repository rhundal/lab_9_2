import "./App.css";
import CharacterCounter from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <CharacterCounter minWords={25} maxWords={500} targetReadingTime={0.3} />
  );
}

export default App;
