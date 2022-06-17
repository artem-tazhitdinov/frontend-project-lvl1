import runGameApp from '../index.js';
import { getRandomByRange, getRandomOperator } from '../utils.js';

const calculateExpression = (n1, n2, operator) => {
  if (operator === '+') {
    return n1 + n2;
  }
  if (operator === '-') {
    return n1 - n2;
  }
  return n1 * n2;
};

const calcGame = () => {
  const gameRules = 'What is the result of the expression?';

  const gameTask = () => {
    const n1 = getRandomByRange();
    const n2 = getRandomByRange();
    const operator = getRandomOperator();
    const gameQuestion = `${n1} ${operator} ${n2}`;
    const correctAnswer = calculateExpression(n1, n2, operator);
    return [gameQuestion, correctAnswer.toString()];
  };

  runGameApp(gameRules, gameTask);
};

export default calcGame;
