import readlineSync from 'readline-sync';

export const getRandomNumber = () => Math.floor(Math.random() * 100);

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

export const getUserName = () => readlineSync.question('May I have your name? ');

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const expressionCalculator = (n1, n2, operator) => {
  if (operator === '+') {
    return n1 + n2;
  }
  if (operator === '-') {
    return n1 - n2;
  }
  return n1 * n2;
};
