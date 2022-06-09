import readlineSync from 'readline-sync';

export const getRandomNumber = (n = 100) => Math.floor(Math.random() * n);

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

export const isPrime = (number) => {
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
