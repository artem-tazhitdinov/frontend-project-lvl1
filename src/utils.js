import readlineSync from 'readline-sync';

export const getRandomNumbers = () => Array.from({ length: 3 }, () => (
  Math.floor(Math.random() * 50)
));

export const getRandomNumber = () => Math.floor(Math.random() * 100);

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const sign = operators[Math.floor(Math.random() * operators.length)];
  return sign;
};

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const expressionCalculator = (n1, n2, operator) => {
  if (operator === '+') {
    return n1 + n2;
  }
  if (operator === '-') {
    return n1 - n2;
  }
  return n1 * n2;
};

export const showResult = (userWin, userName) => (
  userWin ? `Congratulations, ${userName}` : `Let's try again, ${userName}`
);
