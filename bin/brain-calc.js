#!/usr/bin/env node
import readlineSync from 'readline-sync';

const calcGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const gameCounter = 3;
  let userWin = true;

  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const getRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const sign = operators[Math.floor(Math.random() * operators.length)];
    return sign;
  };

  const expressionCalculator = (n1, n2, operator) => {
    if (operator === '+') {
      return n1 + n2;
    }
    if (operator === '-') {
      return n1 - n2;
    }
    return n1 * n2;
  };

  for (let i = 0; i < gameCounter; i += 1) {
    const n1 = getRandomNumber();
    const n2 = getRandomNumber();
    const operator = getRandomOperator();

    console.log(`Question: ${n1} ${operator} ${n2}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = expressionCalculator(n1, n2, operator);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      userWin = false;
      break;
    }
  }
  const result = (userWin) ? `Congratulations, ${userName}` : `Let's try again, ${userName}`;
  console.log(result);
};

calcGame();
