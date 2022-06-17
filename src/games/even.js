import gameApplication from '../index.js';
import { getRandomNumber } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const evenGame = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameTask = () => {
    const gameQuestion = getRandomNumber();
    const correctAnswer = isEven(gameQuestion) ? 'yes' : 'no';
    return [gameQuestion, correctAnswer];
  };

  gameApplication(gameRules, gameTask);
};

export default evenGame;
