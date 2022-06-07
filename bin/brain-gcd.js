#!/usr/bin/env node

import { gameApplication } from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

const gcdGame = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';

  const gameTask = () => {
    let n1 = getRandomNumber();
    let n2 = getRandomNumber();
    const gameQuestion = `Question: ${n1} ${n2}`;
    while (n1 !== n2) {
      if (n1 > n2) {
        n1 -= n2;
      } else {
        n2 -= n1;
      }
    }
    const correctAnswer = n1.toString();
    return [gameQuestion, correctAnswer];
  };
  gameApplication(gameRules, gameTask);
};

gcdGame();
