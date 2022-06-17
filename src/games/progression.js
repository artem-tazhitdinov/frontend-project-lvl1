import gameApplication from '../index.js';
import { getRandomNumber } from '../utils.js';

const progressionGame = () => {
  const gameRules = 'What number is missing in the progression?';

  const createProgression = (step, beginFrom, missingStep) => {
    const progressionArray = [];
    progressionArray.push(beginFrom);

    for (let i = 0; i < 9; i += 1) {
      progressionArray.push(progressionArray[i] + step);
    }

    const valueOfMissingStep = progressionArray[missingStep].toString();
    progressionArray[missingStep] = '..';
    return [progressionArray.join(' '), valueOfMissingStep];
  };

  const gameTask = () => {
    const progStep = getRandomNumber(15);
    const progBegin = getRandomNumber();
    const missingStep = getRandomNumber(10);

    const [gameQuestion, correctAnswer] = createProgression(progStep, progBegin, missingStep);
    return [gameQuestion, correctAnswer];
  };

  gameApplication(gameRules, gameTask);
};

export default progressionGame;