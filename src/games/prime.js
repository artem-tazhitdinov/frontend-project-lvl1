import gameApplication from '../index.js';
import { getRandomNumber } from '../utils.js';

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

const isPrimeGame = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameTask = () => {
    const gameQuestion = getRandomNumber();
    const correctAnswer = isPrime(gameQuestion) ? 'yes' : 'no';
    return [gameQuestion, correctAnswer];
  };

  gameApplication(gameRules, gameTask);
};

export default isPrimeGame;
