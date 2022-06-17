import runGameApp from '../index.js';
import { getRandomByRange } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameTask = () => {
    const gameQuestion = getRandomByRange();
    const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
    return [gameQuestion, correctAnswer];
  };

  runGameApp(gameRules, gameTask);
};

export default evenGame;
