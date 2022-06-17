import gameApplication from '../index.js';
import { getRandomNumber, isPrime } from '../utils.js';

const isPrimeGame = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const gameTask = () => {
    const randomNumber = getRandomNumber();
    const gameQuestion = randomNumber;
    const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';
    return [gameQuestion, correctAnswer];
  };

  gameApplication(gameRules, gameTask);
};

export default isPrimeGame;
