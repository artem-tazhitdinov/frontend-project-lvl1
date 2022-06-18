import readlineSync from 'readline-sync';

export const getRandomByRange = (min = 1, max = 100) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

export const getUserName = () => readlineSync.question('May I have your name? ');

export const getUserAnswer = () => readlineSync.question('Your answer: ');
