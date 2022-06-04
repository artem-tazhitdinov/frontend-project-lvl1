#!/usr/bin/env node

import readlineSync from 'readline-sync';

const brainEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomNumbers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 50));
  let userWin = true;

  for (let i = 0; i < randomNumbers.length; i += 1) {
    console.log(`Question: ${randomNumbers[i]}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (randomNumbers[i] % 2 === 0) ? 'yes' : 'no';

    if ((randomNumbers[i] % 2 === 0) && (userAnswer === 'yes')) {
      console.log('Correct!');
    } else if ((randomNumbers[i] % 2 !== 0) && (userAnswer === 'no')) {
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

brainEvenGame();
