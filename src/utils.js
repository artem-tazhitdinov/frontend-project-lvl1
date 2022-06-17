import readlineSync from 'readline-sync';

export const getRandomByRange = (n = 100) => Math.floor(Math.random() * n);

export const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

export const getUserName = () => readlineSync.question('May I have your name? ');

export const getUserAnswer = () => readlineSync.question('Your answer: ');
