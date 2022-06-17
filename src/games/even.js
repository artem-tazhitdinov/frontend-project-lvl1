import runGameApp from '../index.js';
import { getRandomByRange } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getGameTask = () => {
  const gameQuestion = getRandomByRange();
  const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const evenGame = () => {
  runGameApp(gameRule, getGameTask);
};

export default evenGame;
