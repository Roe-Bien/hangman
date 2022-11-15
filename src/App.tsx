import { useState } from "react";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";
import words from "./wordList.json";
function App() {
  const [word, setWord] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  return (
    <div className='max-w-4xl flex flex-col gap-8 m-auto items-center'>
      <div className='text-4xl items-center'>Win Lose</div>
      <HangmanDrawing />
      <HangmanWord />
      <div className='self-stretch'>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
