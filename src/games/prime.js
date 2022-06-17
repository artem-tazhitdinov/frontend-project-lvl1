import runGameApp from '../index.js';
import { getRandomByRange } from '../utils.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const gameRule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getGameTask = () => {
  const gameQuestion = getRandomByRange();
  const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const isPrimeGame = () => {
  runGameApp(gameRule, getGameTask);
};

export default isPrimeGame;
