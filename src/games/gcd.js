import runGameApp from '../index.js';
import { getRandomByRange } from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGameTask = () => {
  let n1 = getRandomByRange();
  let n2 = getRandomByRange();
  const gameQuestion = `${n1} ${n2}`;

  while (n1 !== n2) {
    if (n1 > n2) {
      n1 -= n2;
    } else {
      n2 -= n1;
    }
  }

  const correctAnswer = n1.toString();
  return [gameQuestion, correctAnswer];
};

const gcdGame = () => {
  runGameApp(gameRule, getGameTask);
};

export default gcdGame;
