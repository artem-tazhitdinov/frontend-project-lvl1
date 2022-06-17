import gameApplication from '../index.js';
import { getRandomNumber, getRandomOperator, expressionCalculator } from '../utils.js';

const calcGame = () => {
  const gameRules = 'What is the result of the expression?';

  const gameTask = () => {
    const n1 = getRandomNumber();
    const n2 = getRandomNumber();
    const operator = getRandomOperator();
    const gameQuestion = `${n1} ${operator} ${n2}`;
    const correctAnswer = expressionCalculator(n1, n2, operator);
    return [gameQuestion, correctAnswer.toString()];
  };

  gameApplication(gameRules, gameTask);
};

export default calcGame;
