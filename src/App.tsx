import HangmanDraw from './components/HangmanDraw';
import HangmanWord from './components/HangmanWord';
import Keyboard from './components/Keyboard';

function App() {
  return (
    <section className='flex flex-col items-center gap-10'>
      <div>Lose Win</div>

      <HangmanDraw />
      <HangmanWord />
      <Keyboard />
    </section>
  );
}

export default App;
