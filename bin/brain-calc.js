#!/usr/bin/env node

import readlineSync from 'readline-sync';
import {
  getRandomNumber, getRandomOperator, expressionCalculator, showResult,
} from '../src/utils.js';
import { gameApplication } from '../src/index.js';

const calcGame = () => {
  const gameRules = 'What is the result of the expression?';

  const gameCounter = 3;
  let userWin = true;

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
  console.log(showResult(userWin, userName));
};

calcGame();
