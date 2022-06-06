#!/usr/bin/env node

import { gameApplication } from '../src/index.js';
import { getRandomNumber, getRandomOperator, expressionCalculator } from '../src/utils.js';

const calcGame = () => {
  const gameRules = 'What is the result of the expression?';
  const gameTask = () => {
    const n1 = getRandomNumber();
    const n2 = getRandomNumber();
    const operator = getRandomOperator();
    const gameQuestion = `Question: ${n1} ${operator} ${n2}`;
    const correctAnswer = expressionCalculator(n1, n2, operator);
    return [gameQuestion, correctAnswer.toString()];
  };

  gameApplication(gameRules, gameTask);
};

calcGame();
