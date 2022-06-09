#!/usr/bin/env node

import gameApplication from '../../src/index.js';
import { getRandomNumber } from '../../src/utils.js';

const progressionGame = () => {
  const gameRules = 'What number is missing in the progression?';

  const gameTask = () => {
    const progressionStep = getRandomNumber(15);
    const progressionBegin = getRandomNumber();
    const progressionArray = [];
    const missingStep = getRandomNumber(10);

    progressionArray.push(progressionBegin);
    for (let i = 0; i < 9; i += 1) {
      progressionArray.push(progressionArray[i] + progressionStep);
    }
    const correctAnswer = progressionArray[missingStep].toString();
    progressionArray[missingStep] = '..';
    const gameQuestion = progressionArray.join(' ');
    return [gameQuestion, correctAnswer];
  };
  gameApplication(gameRules, gameTask);
};
progressionGame();
