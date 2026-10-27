const KEYS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function Keyboard() {
  return (
    <section className='flex flex-wrap w-140 gap-2'>
      {KEYS.map((letter, index) => {
        return (
          <div
            key={index}
            className='border-2 font-semibold p-5'>
            {letter}
          </div>
        );
      })}
    </section>
  );
}

export default Keyboard;
