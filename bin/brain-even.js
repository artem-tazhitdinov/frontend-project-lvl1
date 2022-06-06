#!/usr/bin/env node

import { gameApplication } from '../src/index.js';
import { getRandomNumber } from '../src/utils.js';

const brainEvenGame = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

  const gameTask = () => {
    const randomNumber = getRandomNumber();
    const gameQuestion = `Question: ${randomNumber}`;
    let correctAnswer = 'no';
    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    }
    return [gameQuestion, correctAnswer];
  };
  gameApplication(gameRules, gameTask);
};

brainEvenGame();
