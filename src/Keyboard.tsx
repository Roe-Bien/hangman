const KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
export default function Keyboard() {
  return (
    // <div className='grid grid-cols-1 gap-2 '>
    <div style={{ gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))" }} className='grid gap-2'>
      {KEYS.map((key) => {
        return (
          <button
            className='w-full aspect-square text-3xl font-semibold border bg-none border-black rounded  uppercase hover:bg-slate-400 ac active:bg-blue-400'
            key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
}
