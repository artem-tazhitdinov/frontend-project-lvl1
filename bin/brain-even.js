#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greeting, getRandomNumbers, showResult } from '../src/utils.js';

const brainEvenGame = () => {
  const userName = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const randomNumbersArray = getRandomNumbers();
  let userWin = true;

  for (let i = 0; i < randomNumbersArray.length; i += 1) {
    console.log(`Question: ${randomNumbersArray[i]}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (randomNumbersArray[i] % 2 === 0) ? 'yes' : 'no';

    if ((randomNumbersArray[i] % 2 === 0) && (userAnswer === 'yes')) {
      console.log('Correct!');
    } else if ((randomNumbersArray[i] % 2 !== 0) && (userAnswer === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      userWin = false;
      break;
    }
  }

  console.log(showResult(userWin, userName));
};

brainEvenGame();
