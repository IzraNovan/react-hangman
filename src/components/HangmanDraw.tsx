const HangmanHead = () => {
  return (
    <div className='rounded-full border-6 border-black w-15 h-15 absolute -right-6.5 top-11' />
  );
};

const HangmanBody = () => {
  return <div className='bg-black w-2 h-32 absolute right-0 top-25' />;
};

const HangmanRightArm = () => {
  return (
    <div className='bg-black h-2 w-26 absolute -right-25 top-35 -rotate-12' />
  );
};

const HangmanLeftArm = () => {
  return (
    <div className='bg-black h-2 w-26 absolute right-1 top-35 rotate-12' />
  );
};

const HangmanLeftFoot = () => {
  return (
    <div className='bg-black h-2 w-26 absolute -right-3 top-60 -rotate-45' />
  );
};

const HangmanRightFoot = () => {
  return (
    <div className='bg-black h-2 w-26 absolute -right-21 top-60 rotate-45' />
  );
};

function HangmanDraw() {
  return (
    <section className='relative'>
      <HangmanHead />
      <HangmanBody />
      <HangmanRightArm />
      <HangmanLeftArm />
      <HangmanLeftFoot />
      <HangmanRightFoot />

      {/* TALI */}
      <div className='bg-black w-2 h-12 absolute right-0' />
      {/* KAYU ATAS */}
      <div className='bg-black w-40 h-2 ml-32' />
      {/* TIANG */}
      <div className='bg-black w-2 h-96 ml-32' />
      {/* PENYANGGA */}
      <div className='bg-black w-64 h-2' />
    </section>
  );
}

export default HangmanDraw;
