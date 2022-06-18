import runGameApp from '../index.js';
import { getRandomByRange } from '../utils.js';

const gameRule = 'Find the greatest common divisor of given numbers.';

const getGcd = (numberOne, numberTwo) => {
  let n1 = numberOne;
  let n2 = numberTwo;
  while (n1 !== n2) {
    if (n1 > n2) {
      n1 -= n2;
    } else {
      n2 -= n1;
    }
  }
  return n1.toString();
};

const getGameTask = () => {
  const n1 = getRandomByRange(1);
  const n2 = getRandomByRange(1);
  const gameQuestion = `${n1} ${n2}`;

  const correctAnswer = getGcd(n1, n2);
  return [gameQuestion, correctAnswer];
};

const gcdGame = () => {
  runGameApp(gameRule, getGameTask);
};

export default gcdGame;
