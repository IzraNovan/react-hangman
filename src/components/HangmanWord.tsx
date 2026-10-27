function HangmanWord() {
  const word = 'abudzar';

  return (
    <section className='flex gap-6'>
      {word.split('').map((letter, index) => {
        return (
          <span
            key={index}
            className='uppercase font-semibold text-5xl border-b-6 pb-2 border-black'>
            {letter}
          </span>
        );
      })}
    </section>
  );
}

export default HangmanWord;
