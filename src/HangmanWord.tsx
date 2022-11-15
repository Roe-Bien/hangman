export default function HangmanWord() {
  const guessedLetters = ["t", "e", "s"];
  const word = "test";
  return (
    <div className='flex gap-6 text-8xl font-bold uppercase font-mono '>
      {word.split("").map((letter, index) => (
        <span key={index} className='border-b-8 border-black '>
          <span className={guessedLetters.includes(letter) ? "visible" : "invisible"}>{letter}</span>
        </span>
      ))}
    </div>
  );
}
